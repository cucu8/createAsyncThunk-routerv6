import { configureStore } from '@reduxjs/toolkit'

import charactersSlice from './characterSlice/characterSlice'

export const store = configureStore({
    reducer: {
        charactersSlice,
    },
})