import React from 'react'
import { SearchContainer } from './SearchContainer'

export const SearchInput = () => {
  const { doSearch } = SearchContainer.useContainer()
  return <input type='text' onChange={e => doSearch(e.target.value)} />
}
