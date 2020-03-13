import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { searchStore, searchEpic } from './search.store'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

const rootReducer = combineReducers({
  search: searchStore.reducer,
})

const epicMiddleware = createEpicMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
})

epicMiddleware.run(combineEpics(searchEpic))

export type RootState = ReturnType<typeof rootReducer>
