import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { RxjsHook } from './4-RxjsHooks'
import { Redux } from './1-Redux'
import { UnstatedNext } from './2-Unstated-next'

let Nav = () => (
  <nav>
    <Link to='/'>Home</Link> | <Link to='/redux'>Demo1</Link>|{' '}
    <Link to='/unstated-next'>Demo2</Link> | <Link to='/reto'>Demo3</Link> |{' '}
    <Link to='/rxjs-hooks'>Demo4</Link>
  </nav>
)

export const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' children={<h3>Demo</h3>} />
        <Route path='/redux' component={Redux} />
        <Route path='/unstated-next' component={UnstatedNext} />
        <Route path='/rxjs-hooks' component={RxjsHook} />
      </Switch>
    </Router>
  )
}
