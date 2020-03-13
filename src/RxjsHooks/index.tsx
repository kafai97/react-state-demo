import React from 'react'

import { SearchInput } from './SearchInput'
import { SearchResult } from './SearchResult'
import { SearchContainer } from './useSearch'

export const RxjsHook = () => (
  <SearchContainer.Provider>
    <h3>Rxjs-hooks</h3>
    <SearchInput />
    <SearchResult />
  </SearchContainer.Provider>
)
