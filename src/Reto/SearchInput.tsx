import React from 'react'
import { SearchStore } from './SearchStore'
import { useStore } from 'reto'

export const SearchInput = () => {
  const { doSearch } = useStore(SearchStore)
  return <input type='text' onChange={e => doSearch(e.target.value)} />
}
