import { createSlice, configureStore, combineReducers, PayloadAction } from '@reduxjs/toolkit'

// store/count.store.ts
const countStore = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
    decrement: (state, action: PayloadAction<number>) => state - action.payload,
  },
})

export const { actions: counterActions, reducer: counterRducer } = countStore

// store/index.ts
const rootReducer = combineReducers({
  count: counterRducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
