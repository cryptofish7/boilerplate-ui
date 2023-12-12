import axios, { CreateAxiosDefaults } from 'axios'

const DEXBARN_URL = process.env.REACT_APP_BARN_URL
if (typeof DEXBARN_URL === 'undefined') {
  throw new Error('REACT_APP_BARN_URL must be a defined environment variable')
}

const DEXBARN_TESTNET_URL = process.env.REACT_APP_BARN_TESTNET_URL
if (typeof DEXBARN_URL === 'undefined') {
  throw new Error(
    'REACT_APP_BARN_TESTNET_URL must be a defined environment variable'
  )
}

const clientConfig: CreateAxiosDefaults = {
  headers: { accept: 'application/json' },
  withCredentials: true
}

export const dexbarnClient = axios.create({
  ...clientConfig,
  baseURL: DEXBARN_URL
})

export const dexbarnTestnetClient = axios.create({
  ...clientConfig,
  baseURL: DEXBARN_TESTNET_URL
})
