import React from 'react'

import { SearchInput } from './SearchInput'
import { SearchResult } from './SearchResult'
import { SearchProvider } from './useSearch'

export const RxjsHook = () => (
  <SearchProvider>
    <h3>Context API with Rxjs-hooks</h3>
    <SearchInput />
    <SearchResult />
  </SearchProvider>
)
