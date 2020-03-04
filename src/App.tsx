import React from 'react'

import { Link, RouteComponentProps, Router } from '@reach/router'

import { SearchRxjsHook } from './RxjsHooks'

let Home: React.FC<RouteComponentProps> = () => <h1>Demo Time</h1>

let Nav = () => (
  <nav>
    <Link to='/'>Home</Link> | <Link to='rxjs-hooks'>Demo1</Link>
  </nav>
)

export const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Home path='/' />
        <SearchRxjsHook path='rxjs-hooks' />
      </Router>
    </>
  )
}
