import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '../menu/menuSlice'

export const store = configureStore({
  reducer: {
    menu:menuReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch