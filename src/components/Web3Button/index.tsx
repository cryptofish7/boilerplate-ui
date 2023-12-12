import { Button, ButtonProps } from '@chakra-ui/react'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { chain } from 'constants/chains'
import useSwitchNetwork from 'hooks/useSwitchNetwork'
import React from 'react'
import { useAccount, useNetwork } from 'wagmi'

const Web3Button = (props: ButtonProps) => {
  const { isConnected } = useAccount()
  const { chain: walletChain } = useNetwork()
  const { openConnectModal } = useConnectModal()

  const { switchNetwork } = useSwitchNetwork()
  const targetChain = chain

  return isConnected && walletChain?.unsupported ? (
    <Button
      {...props}
      leftIcon={undefined}
      rightIcon={undefined}
      isDisabled={false}
      onClick={() => switchNetwork?.(targetChain.id)}
    >
      Switch to {targetChain.name}
    </Button>
  ) : isConnected ? (
    <Button {...props} />
  ) : (
    <Button {...props} isDisabled={false} onClick={openConnectModal}>
      Connect Wallet
    </Button>
  )
}

export default Web3Button
