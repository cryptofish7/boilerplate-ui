import { ConnectButton as RainbowKitConnectButton } from '@rainbow-me/rainbowkit'
import useAutoConnect from 'hooks/useAutoConnect'
import React from 'react'

const ConnectButton = () => {
  useAutoConnect()
  return <RainbowKitConnectButton />
}

export default ConnectButton
