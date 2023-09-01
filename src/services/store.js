import { configureStore } from '@reduxjs/toolkit'

import { articleApi } from './article'
export const store = configureStore({
    // reducer allows you to get a specific slice of what youw need
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})