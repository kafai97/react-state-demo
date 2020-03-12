import { createStore, applyMiddleware } from 'redux'

import { rootReducer } from './reducers'

import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from './epics'

const epicMiddleware = createEpicMiddleware()

export const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

epicMiddleware.run(rootEpic)

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
