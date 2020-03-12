import React from 'react'

import { SearchContainer } from './useSearch'

export const SearchResult = () => {
  const { value } = SearchContainer.useContainer()

  return <pre>{JSON.stringify(value, null, 2)}</pre>
}
