import React from 'react'
import { SearchStore } from './SearchStore'
import { SearchInput } from './SearchInput'
import { SearchResult } from './SearchResult'
import { Provider } from 'reto'

export const Reto = () => (
  <Provider of={SearchStore} memo>
    <h3>Reto</h3>
    <SearchInput />
    <SearchResult />
  </Provider>
)
