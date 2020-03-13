import { ajax } from 'rxjs/ajax'
import { map } from 'rxjs/operators'

export interface ApiResponse {
  count: number
  entries: Entry[]
}

export interface Entry {
  API: string
  Description: string
  Auth: string
  HTTPS: boolean
  Cors: string
  Link: string
  Category: string
}

export const baseUrl = 'https://api.publicapis.org'

export const getData = async ({ title }: { title: string }) => {
  try {
    const searchParams = new URLSearchParams({ title }).toString()
    const res = await fetch(`${baseUrl}/entries?${searchParams}`)
    const json: ApiResponse = await res.json()
    return json.entries
  } catch (e) {
    throw e
  }
}

export const getData$ = ({ title }: { title: string }) => {
  const searchParams = new URLSearchParams({ title }).toString()
  return ajax
    .getJSON<ApiResponse>(`${baseUrl}/entries?${searchParams}`)
    .pipe(map(res => res.entries))
}
