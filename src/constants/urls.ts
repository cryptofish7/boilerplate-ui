import { t } from '@lingui/macro'

const legacyInterfaceBaseUrl = 'https://v1.traderjoexyz.com'

export interface SubmenuItem {
  name: string
  url: string
  external?: boolean
}

const joeHome: SubmenuItem = {
  external: false,
  name: t`Home`,
  url: ''
}

const joeTrade: SubmenuItem = {
  external: false,
  name: t`Trade`,
  url: 'trade'
}

const joePool: SubmenuItem = {
  external: false,
  name: t`Pool`,
  url: 'pool'
}

const joeFarm: SubmenuItem = {
  external: true,
  name: t`Farm`,
  url: `${legacyInterfaceBaseUrl}/farm`
}

const joeLend: SubmenuItem = {
  external: true,
  name: t`Lend`,
  url: `${legacyInterfaceBaseUrl}/lend`
}

const joeStake: SubmenuItem = {
  external: false,
  name: t`Stake`,
  url: 'stake'
}

const joeBridge: SubmenuItem = {
  external: true,
  name: t`Bridge`,
  url: 'https://bridge.traderjoexyz.com/'
}

export { joeBridge, joeFarm, joeHome, joeLend, joePool, joeStake, joeTrade }
