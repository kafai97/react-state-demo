import React from 'react'

import { RouteComponentProps } from '@reach/router'

import { SearchInput } from './SearchInput'
import { SearchResult } from './SearchResult'
import { SearchProvider } from './useSearch'

export const SearchRxjsHook: React.FC<RouteComponentProps> = () => (
  <SearchProvider>
    <h1>context api with rxjs-hooks</h1>
    <SearchInput />
    <SearchResult />
  </SearchProvider>
)
