import AvalancheIcon from 'assets/avalanche.svg'
import { Chain } from 'wagmi'
import {
  avalanche as wagmiAvalanche,
  avalancheFuji as wagmiAvalancheFuji
} from 'wagmi/chains'

export interface JoeChain {
  iconUrl: string
  slug: string
}

export const avalanche: Chain & JoeChain = {
  ...wagmiAvalanche,
  iconUrl: AvalancheIcon,
  slug: 'avalanche'
}

const fuji: Chain & JoeChain = {
  ...wagmiAvalancheFuji,
  iconUrl: AvalancheIcon,
  slug: 'fuji'
}

const isTestnet = process.env.REACT_APP_IS_TESTNET === 'true'
export const chain = isTestnet ? fuji : avalanche
