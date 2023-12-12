import { t } from '@lingui/macro'
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit'
import { ChainId } from '@traderjoe-xyz/sdk-core'
import { MAX_UINT256 } from 'constants/bigint'
import { useMemo, useState } from 'react'
import { USDT } from 'utils/swap'
import { getAddress } from 'viem'
import {
  erc20ABI,
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction
} from 'wagmi'

import useChainId from './useChainId'
import useTransactionToast from './useTransactionToast'

export type TokenApprovalType = 'one_time' | 'unlimited'

interface UseApproveSpenderIfNeededProps {
  spender: string
  amount?: bigint
  token?: string
  tokenSymbol?: string
}

const useApproveSpenderIfNeeded = ({
  amount: transactionAmount,
  spender,
  token,
  tokenSymbol
}: UseApproveSpenderIfNeededProps) => {
  const { address: account } = useAccount()
  const chainId = useChainId()
  const walletChainId = useNetwork().chain?.id
  const addRecentTransaction = useAddRecentTransaction()
  const addTransactionToast = useTransactionToast()

  const [approvalType, setApprovalType] =
    useState<TokenApprovalType>('one_time')
  const amount = useMemo(
    () => (approvalType === 'unlimited' ? MAX_UINT256 : transactionAmount),
    [approvalType, transactionAmount]
  )

  const { data: allowance, refetch: refetchAllowance } = useContractRead({
    abi: erc20ABI,
    address: token ? getAddress(token) : undefined,
    args: account ? [account, getAddress(spender)] : undefined,
    cacheTime: 0,
    chainId,
    enabled: !!account && amount !== undefined,
    functionName: 'allowance'
  })

  const isInitiallyApproved = useMemo(
    () =>
      allowance !== undefined && amount !== undefined
        ? allowance >= amount
        : undefined,
    [allowance, amount]
  )

  // NOTES: USDT on Ethereum requires a different ABI for the approve function
  const isUsdtOnEthereum =
    token === USDT[ChainId.ETHEREUM].address && chainId === ChainId.ETHEREUM

  const { config } = usePrepareContractWrite({
    abi: (isUsdtOnEthereum ? usdtApproveFunctionAbi : erc20ABI) as any,
    address: token ? getAddress(token) : undefined,
    args: amount ? [getAddress(spender), amount] : undefined,
    cacheTime: 0,
    chainId,
    enabled:
      !isInitiallyApproved &&
      amount !== undefined &&
      allowance !== undefined &&
      walletChainId === chainId,
    functionName: 'approve',

    onSuccess: () => {
      reset()
    },
    value: BigInt(0) as any // workaround for safe app
  })

  const { data, isLoading, reset, write, writeAsync } = useContractWrite({
    ...config,
    onSuccess: (data) => {
      const description = t`Approve ${tokenSymbol}`
      addRecentTransaction({
        description,
        hash: data.hash
      })
      addTransactionToast({ description, hash: data.hash })
    }
  })

  const {
    data: receipt,
    isLoading: isWaitingForTransaction,
    isSuccess
  } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => refetchAllowance()
  })

  return {
    approvalType,
    approve: write,
    approveAsync: writeAsync,
    isApproved: isInitiallyApproved || receipt?.status === 'success',
    isApproving: isLoading || isWaitingForTransaction,
    isSuccess,
    refetchAllowance,
    reset,
    setApprovalType
  }
}

export default useApproveSpenderIfNeeded

const usdtApproveFunctionAbi = [
  {
    constant: false,
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_value', type: 'uint256' }
    ],
    name: 'approve',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const
