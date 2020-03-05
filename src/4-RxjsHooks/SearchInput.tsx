import React from 'react'

import { SearchContainer } from './useSearch'

export const SearchInput = () => {
  const { inputCallback } = SearchContainer.useContainer()

  return <input type='text' onChange={inputCallback} />
}
