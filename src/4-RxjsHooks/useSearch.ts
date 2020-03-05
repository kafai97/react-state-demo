import { Observable } from 'rxjs'
import { useEventCallback } from 'rxjs-hooks'
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators'
import { createContainer } from 'unstated-next'

import { getData$ } from '../api'

export const { useContainer: useSearch, Provider: SearchProvider } = createContainer(() => {
  const [inputCallback, value] = useEventCallback(
    (event$: Observable<React.ChangeEvent<HTMLInputElement>>) =>
      event$.pipe(
        map(e => e.target.value),
        filter(val => val !== ''),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(keyword => getData$({ title: keyword })),
      ),
    [],
  )

  return { inputCallback, value }
})
