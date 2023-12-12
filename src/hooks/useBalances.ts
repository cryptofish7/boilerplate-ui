import { erc20ABI, useAccount, useContractReads } from 'wagmi'

import useChainId from './useChainId'

interface UseBalancesProps {
  erc20Tokens: `0x${string}`[]
  enabled?: boolean
}

const useBalances = ({ enabled = true, erc20Tokens }: UseBalancesProps) => {
  const { address: account } = useAccount()
  const chainId = useChainId()

  const calls = erc20Tokens.map((token) => {
    return {
      abi: erc20ABI,
      address: token,
      args: account ? [account] : undefined,
      chainId,
      functionName: 'balanceOf'
    } as const
  })

  const { data: reads, isFetching } = useContractReads({
    allowFailure: true,
    contracts: calls,
    enabled: !!account && enabled
  })

  return {
    data: reads
      ?.filter((read) => read.status === 'success')
      .map((read) => read.result as bigint | null),
    isFetching
  }
}

export default useBalances
