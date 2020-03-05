import { createStore, combineReducers, Action } from 'redux'

// store/actions/counterAction.ts
export type CounterActionType = 'PLUS' | 'MINUS'

export interface CounterAction extends Action {
  type: CounterActionType
  payload: number
}

// store/reducers/counterReducer.ts
export const counterReducer = (state = 0, action: CounterAction) => {
  switch (action.type) {
    case 'PLUS':
      return state + action.payload
    case 'MINUS':
      return state - action.payload
    default:
      return state
  }
}

// store/reducers/index.ts
const rootReducer = combineReducers({
  count: counterReducer,
})

// store/index.ts
export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
