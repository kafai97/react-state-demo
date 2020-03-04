import { of } from 'rxjs'
import { ajax, AjaxError } from 'rxjs/ajax'
import { catchError, map } from 'rxjs/operators'

export interface ApiResponse {
  count: number
  entries: Entry[]
}

export interface Entry {
  API: string
  Description: string
  Auth: string
  HTTPS: boolean
  Cors: Cors
  Link: string
  Category: string
}

export enum Cors {
  No = 'no',
  Unknown = 'unknown',
  Yes = 'yes',
}

export const baseUrl = 'https://api.publicapis.org'

export const getData$ = ({ title }: { title: string }) => {
  const searchParams = new URLSearchParams({ title }).toString()
  return ajax.getJSON<ApiResponse>(`${baseUrl}/entries?${searchParams}`).pipe(
    map(res => res.entries),
    catchError((error: AjaxError) => of({ error })),
  )
}
