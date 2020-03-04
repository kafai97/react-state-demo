import React from 'react'

import { useSearch } from './useSearch'

export const SearchInput = () => {
  const { inputCallback } = useSearch()

  return <input type='text' onChange={inputCallback} />
}
