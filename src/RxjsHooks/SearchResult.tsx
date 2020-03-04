import React from 'react'

import { useSearch } from './useSearch'

export const SearchResult = () => {
  const { value } = useSearch()

  return <pre>{JSON.stringify(value, null, 2)}</pre>
}
