import { createSlice, configureStore, combineReducers, PayloadAction } from '@reduxjs/toolkit'

// store/count.store.ts
export const countStore = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
    decrement: (state, action: PayloadAction<number>) => state - action.payload,
  },
})

// store/index.ts
const rootReducer = combineReducers({
  count: countStore.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
