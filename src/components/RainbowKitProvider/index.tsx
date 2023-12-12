import { useColorMode, useMediaQuery } from '@chakra-ui/react'
import {
  darkTheme,
  lightTheme,
  RainbowKitProvider as RainbowKitProviderDefault,
  Theme
} from '@rainbow-me/rainbowkit'
import { chain } from 'constants/chains'
import React from 'react'
import { fontStyle } from 'theme/fonts'

const joeDarkTheme: Theme = {
  ...darkTheme({ accentColor: '#8473ff' }),
  fonts: { body: fontStyle }
}

const joeLightTheme: Theme = {
  ...lightTheme({ accentColor: '#8473ff' }),
  fonts: { body: fontStyle }
}

interface RainbowKitProviderProps {
  children: React.ReactNode
}

const RainbowKitProvider = ({ children }: RainbowKitProviderProps) => {
  const [isLargerThan720] = useMediaQuery('(min-width: 720px)')
  const { colorMode } = useColorMode()

  return (
    <RainbowKitProviderDefault
      chains={[chain]}
      appInfo={{
        appName: 'Potus'
      }}
      theme={colorMode === 'dark' ? joeDarkTheme : joeLightTheme}
      showRecentTransactions={isLargerThan720}
      modalSize="compact"
    >
      {children}
    </RainbowKitProviderDefault>
  )
}

export default RainbowKitProvider
