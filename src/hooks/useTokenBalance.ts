import { getAddress } from 'viem'
import { useAccount, useBalance } from 'wagmi'

import useActiveChain from './useActiveChain'

interface UseTokenBalanceProps {
  enabled?: boolean
  token?: string
}

export const useTokenBalance = ({ enabled, token }: UseTokenBalanceProps) => {
  const { address: account } = useAccount()
  const chain = useActiveChain()
  return useBalance({
    address: account,
    chainId: chain.id,
    enabled: enabled ? enabled : !!account,
    token: token ? getAddress(token) : undefined
  })
}
