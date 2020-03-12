import React from 'react'
import { SearchContainer } from './SearchContainer'

export const SearchResult = () => {
  const { searchResult } = SearchContainer.useContainer()

  return <pre>{JSON.stringify(searchResult, null, 2)}</pre>
}
