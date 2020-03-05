import React from 'react'
import { SearchContainer } from './SearchContainer'
import { SearchInput } from './SearchInput'
import { SearchResult } from './SearchResult'

export const UnstatedNext = () => (
  <SearchContainer.Provider>
    <h3>Unstated Next</h3>
    <SearchInput />
    <SearchResult />
  </SearchContainer.Provider>
)
