import { Observable, of } from 'rxjs'
import { useEventCallback } from 'rxjs-hooks'
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  catchError,
} from 'rxjs/operators'
import { createContainer } from 'unstated-next'

import { getData$ } from '../api'
import { AjaxError } from 'rxjs/ajax'

export const SearchContainer = createContainer(() => {
  const [inputCallback, value] = useEventCallback(
    (event$: Observable<React.ChangeEvent<HTMLInputElement>>) =>
      event$.pipe(
        map(e => e.target.value),
        filter(val => val !== ''),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(title =>
          getData$({ title }).pipe(catchError((error: AjaxError) => of({ error }))),
        ),
      ),
    [],
  )

  return { inputCallback, value }
})
