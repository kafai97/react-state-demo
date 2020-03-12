import React from 'react'
import { SearchStore } from './SearchStore'
import { useStore } from 'reto'

export const SearchResult = () => {
  const { searchResult } = useStore(SearchStore)

  return <pre>{JSON.stringify(searchResult, null, 2)}</pre>
}
