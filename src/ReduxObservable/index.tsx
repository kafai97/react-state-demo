import React from 'react'

import { Provider } from 'react-redux'
import { store } from './store'
import { SearchInput } from './components/SearchInput'
import { SearchResult } from './components/SearchResult'

export const ReduxObservable = () => (
  <Provider store={store}>
    <h3>Redux Observable</h3>
    <SearchInput />
    <SearchResult />
  </Provider>
)
