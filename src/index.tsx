import 'theme/index.css'
import '@rainbow-me/rainbowkit/styles.css'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { QueryClientProvider } from '@tanstack/react-query'
import AxiosInterceptor from 'components/AxiosInterceptor'
import RainbowKitProvider from 'components/RainbowKitProvider'
import { queryClient } from 'constants/queryClient'
import { wagmi } from 'constants/wagmi'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from 'state/store'
import { chakraTheme } from 'theme/chakra'
import { WagmiConfig } from 'wagmi'

import { App } from './App'
import reportWebVitals from './reportWebVitals'

// https://github.com/WalletConnect/walletconnect-monorepo/issues/748#issuecomment-1178160422
// eslint-disable-next-line @typescript-eslint/no-var-requires
window.Buffer = window.Buffer || require('buffer').Buffer

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <QueryClientProvider client={queryClient}>
      <AxiosInterceptor>
        <Provider store={store}>
          <ChakraProvider theme={chakraTheme}>
            <WagmiConfig config={wagmi.wagmiConfig}>
              <RainbowKitProvider>
                <App />
              </RainbowKitProvider>
            </WagmiConfig>
          </ChakraProvider>
        </Provider>
      </AxiosInterceptor>
    </QueryClientProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
