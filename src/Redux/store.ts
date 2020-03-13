import { createStore, combineReducers, Action } from 'redux'

export enum CounterActionType {
  PLUS = 'PLUS',
  MINUS = 'MINUS',
}

export interface CounterAction extends Action {
  type: CounterActionType
  payload: number
}

// Action Creator
export const increment = (value: number) =>
  ({ type: CounterActionType.PLUS, payload: value } as CounterAction)

export const decrement = (value: number) =>
  ({ type: CounterActionType.MINUS, payload: value } as CounterAction)

export const counterReducer = (state = 0, action: CounterAction) => {
  switch (action.type) {
    case CounterActionType.PLUS:
      return state + action.payload
    case CounterActionType.MINUS:
      return state - action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  count: counterReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
