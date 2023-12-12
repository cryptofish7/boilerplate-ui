import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import {
  braveWallet,
  coinbaseWallet,
  coreWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  okxWallet,
  phantomWallet,
  rabbyWallet,
  trustWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets'
import { ChainId } from '@traderjoe-xyz/sdk-core'
import { publicProvider } from '@wagmi/core/providers/public'
import { chain } from 'constants/chains'
import { Connector, createConfig } from 'wagmi'
import { configureChains } from 'wagmi'
import { SafeConnector } from 'wagmi/connectors/safe'
import { infuraProvider } from 'wagmi/providers/infura'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const infuraApiKey = process.env.REACT_APP_INFURA_KEY ?? ''
const poktPortalId = process.env.REACT_APP_POKT_PORTAL_ID ?? ''
const walletConnectProjectId =
  process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID ?? ''

const supportedChains = [chain]

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      coreWallet({
        chains: supportedChains,
        projectId: walletConnectProjectId
      }),
      coinbaseWallet({ appName: 'Potus', chains: supportedChains }),
      trustWallet({
        chains: supportedChains,
        projectId: walletConnectProjectId
      }),
      metaMaskWallet({
        chains: supportedChains,
        projectId: walletConnectProjectId
      }),
      walletConnectWallet({
        chains: supportedChains,
        projectId: walletConnectProjectId
      }),
      braveWallet({ chains: supportedChains }),
      ledgerWallet({
        chains: supportedChains,
        projectId: walletConnectProjectId
      }),
      injectedWallet({ chains: supportedChains }),
      rabbyWallet({ chains: supportedChains }),
      phantomWallet({ chains: supportedChains }),
      okxWallet({ chains: supportedChains, projectId: walletConnectProjectId })
    ]
  }
])

const hiddenConnectors: Connector[] = [
  new SafeConnector({ chains: supportedChains })
]

const { chains: wagmiChains, publicClient } = configureChains(
  supportedChains,
  [
    infuraProvider({
      apiKey: infuraApiKey
    }),
    jsonRpcProvider({
      rpc: (chain) => {
        switch (chain.id) {
          case ChainId.AVALANCHE:
            return {
              http: `https://avax-mainnet.gateway.pokt.network/v1/lb/${poktPortalId}`
            }
        }
        return null
      }
    }),
    publicProvider()
  ],
  {
    batch: { multicall: true }
  }
)

const wagmiConfig = createConfig({
  autoConnect: false,
  connectors: [...connectors(), ...hiddenConnectors],
  publicClient
})

export const wagmi = {
  wagmiChains,
  wagmiConfig
}
