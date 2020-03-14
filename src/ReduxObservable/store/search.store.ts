import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit'
import { Entry, getData$ } from '../../api'
import { ofType, Epic } from 'redux-observable'
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
} from 'rxjs/operators'
import { AjaxError } from 'rxjs/ajax'
import { of } from 'rxjs'

export const searchStore = createSlice({
  name: 'search',
  initialState: [] as Entry[] | Error,
  reducers: {
    searchStart: (state, action: PayloadAction<string>) => state,
    searchSucess: (state, action: PayloadAction<Entry[]>) => action.payload,
    searchFailed: (state, action: PayloadAction<Error>) => action.payload,
  },
})

export const searchEpic: Epic = action$ =>
  action$.pipe(
    ofType<Action, PayloadAction<string>>(searchStore.actions.searchStart.type),
    map(action => action.payload),
    filter(val => val !== ''),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(title =>
      getData$({ title }).pipe(
        map(entries => searchStore.actions.searchSucess(entries)),
        catchError((error: AjaxError) => of(searchStore.actions.searchFailed(error))),
      ),
    ),
  )
