import { ChainId } from '@traderjoe-xyz/sdk-core'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelectedChainId } from 'state/settings/hooks'
import { getChainSlug } from 'utils/chains'
import { ConnectorData, useAccount } from 'wagmi'

const useChainChangeListener = () => {
  const navigate = useNavigate()
  const { connector } = useAccount()
  const { setSelectedChainId } = useSelectedChainId()

  const updateChain = useCallback(
    (chainId: number) => {
      // update selected chain ID
      setSelectedChainId(chainId)

      const chainSlug = getChainSlug(chainId)
      if (!chainSlug) return

      if (
        (location.pathname.includes('pool/v1/') ||
          location.pathname.includes('pool/v2/') ||
          location.pathname.includes('pool/v21/') ||
          location.pathname.includes('vault/')) &&
        !location.pathname.includes(chainSlug)
      ) {
        // redirect to main pool page
        navigate(`/${chainSlug}/pool`)
      } else if (
        (location.pathname.includes('stake/sjoe') ||
          location.pathname.includes('stake/vejoe')) &&
        !location.pathname.includes(chainSlug)
      ) {
        // redirect to main stake page
        navigate(`/${chainSlug}/stake`)
      } else if (
        location.pathname.includes('v1/rewards/claim') &&
        ![ChainId.FUJI, ChainId.AVALANCHE].includes(chainId)
      ) {
        // redirect to home page
        return navigate(`/${chainSlug}`)
      } else {
        // change chain slug in current route
        const newUrl = [
          `/${chainSlug}`,
          ...location.pathname.split('/').slice(2)
        ].join('/')
        navigate(newUrl)
      }
    },
    [setSelectedChainId, navigate]
  )

  useEffect(() => {
    const listener = ({ chain }: ConnectorData) => {
      if (!chain || chain.unsupported) return
      setSelectedChainId(chain.id)
    }
    if (connector) {
      connector.on('change', listener)
    }
    return () => {
      connector?.off('change', listener)
    }
  }, [connector, setSelectedChainId])

  return { updateChain }
}

export default useChainChangeListener
