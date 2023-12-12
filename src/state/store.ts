import { configureStore } from '@reduxjs/toolkit'
import { load, save } from 'redux-localstorage-simple'

import settings from './settings/reducer'

const PERSISTED_KEYS: string[] = ['settings']

const store = configureStore({
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    save({ states: PERSISTED_KEYS })
  ],
  preloadedState: load({ states: PERSISTED_KEYS }),
  reducer: {
    settings
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
