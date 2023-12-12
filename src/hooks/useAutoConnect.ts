import { wagmi } from 'constants/wagmi'
import { useEffect } from 'react'
import { useConnect } from 'wagmi'

// https://github.com/safe-global/safe-apps-sdk/blob/master/examples/wagmi/src/useAutoConnect.ts
const useAutoConnect = () => {
  const { connect, connectors } = useConnect()

  useEffect(() => {
    const safeConnector = connectors.find((c) => c.id === 'safe' && c.ready)
    if (safeConnector) {
      connect({ connector: safeConnector })
    } else {
      wagmi.wagmiConfig.autoConnect()
    }
  }, [connect, connectors])
}

export default useAutoConnect
