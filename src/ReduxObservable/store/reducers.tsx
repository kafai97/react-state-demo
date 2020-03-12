import { combineReducers, Action } from 'redux'
import { Entry } from '../../api'

// store/actions/SearchAction.ts
export enum SearchActionType {
  SEARCH_START = 'SEARCH_START',
  SEARCH_SUCCESS = 'SEARCH_SUCCESS',
  SEARCH_FAILED = 'SEARCH_FAILED',
}

export interface SearchStartAction extends Action {
  type: SearchActionType.SEARCH_START
  payload: string
}

export interface SearchSuccessAction extends Action {
  type: SearchActionType.SEARCH_SUCCESS
  payload: Entry[]
}

export interface SearchFailedAction extends Action {
  type: SearchActionType.SEARCH_FAILED
  payload: Error
}

export type SearchAction = SearchStartAction | SearchSuccessAction | SearchFailedAction

//Action Creator
export function searchStart(payload: string): SearchStartAction {
  return { type: SearchActionType.SEARCH_START, payload }
}

export function searchSucess(payload: Entry[]): SearchSuccessAction {
  return { type: SearchActionType.SEARCH_SUCCESS, payload }
}

export function searchFailed(payload: Error): SearchFailedAction {
  return { type: SearchActionType.SEARCH_FAILED, payload }
}

// store/reducers/SearchReducer.ts

export interface SearchData {
  data: Entry[]
}

const searchInit: SearchData = { data: [] }

export const SearchReducer = (state = searchInit, action: SearchAction) => {
  switch (action.type) {
    case SearchActionType.SEARCH_SUCCESS:
    case SearchActionType.SEARCH_FAILED:
      return { ...state, data: action.payload }
    default:
      return state
  }
}

// store/reducers/index.ts
export const rootReducer = combineReducers({ search: SearchReducer })
