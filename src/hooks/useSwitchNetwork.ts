import { useSwitchNetwork as useWagmiSwitchNetwork } from 'wagmi'

import useErrorToast from './useErrorToast'

const useSwitchNetwork = () => {
  const addErrorToast = useErrorToast()

  return useWagmiSwitchNetwork({
    onError: (error) => {
      // ignore user cancel errors
      if ((error as any).code === 4001) return
      addErrorToast(
        error.message,
        'Please switch to the correct network from your wallet.'
      )
    }
  })
}

export default useSwitchNetwork
