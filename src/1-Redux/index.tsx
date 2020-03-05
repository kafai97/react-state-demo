import React from 'react'

import { Counter } from './Counter'
import { DoCount } from './DoCount'
import { Provider } from 'react-redux'
import { store } from './store'

export const Redux = () => (
  <Provider store={store}>
    <h3>Redux</h3>
    <Counter />
    <DoCount />
  </Provider>
)
