import { ofType, ActionsObservable, combineEpics } from 'redux-observable'
import { SearchActionType, searchSucess, searchFailed, SearchStartAction } from './reducers'
import {
  filter,
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
} from 'rxjs/operators'
import { getData$ } from '../../api'
import { AjaxError } from 'rxjs/ajax'
import { of } from 'rxjs'
import { Action } from 'redux'

const fetchEpic = (action$: ActionsObservable<Action>) =>
  action$.pipe(
    ofType<Action, SearchStartAction>(SearchActionType.SEARCH_START),
    map(action => action.payload),
    filter(val => val !== ''),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(title =>
      getData$({ title }).pipe(
        map(entries => searchSucess(entries)),
        catchError((error: AjaxError) => of(searchFailed(error))),
      ),
    ),
  )

export const rootEpic = combineEpics(fetchEpic)
