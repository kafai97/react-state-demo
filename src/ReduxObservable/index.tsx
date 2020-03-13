import React from 'react'

import { Provider } from 'react-redux'
import { SearchInput } from './components/SearchInput'
import { SearchResult } from './components/SearchResult'
import { store } from './store'

export const ReduxObservable = () => (
  <Provider store={store}>
    <h3>Redux Observable</h3>
    <SearchInput />
    <SearchResult />
  </Provider>
)
