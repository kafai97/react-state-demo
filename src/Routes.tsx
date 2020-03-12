import React from 'react'
import { RxjsHook } from './RxjsHooks'
import { Redux } from './Redux'
import { UnstatedNext } from './Unstated-next'
import { Link, Switch, Route } from 'react-router-dom'
import { Reto } from './Reto'
import { ReduxObservable } from './ReduxObservable'

interface IRoute {
  path: string
  component: () => JSX.Element
  exact?: Boolean
}

const routes: IRoute[] = [
  {
    path: '/',
    component: () => <h3>Demo</h3>,
    exact: true,
  },
  {
    path: '/redux',
    component: Redux,
  },
  {
    path: '/unstated-next',
    component: UnstatedNext,
  },
  {
    path: '/reto',
    component: Reto,
  },
  {
    path: '/rxjs-hooks',
    component: RxjsHook,
  },
  {
    path: '/redux-observable',
    component: ReduxObservable,
  },
]

export const Nav = () => (
  <nav>
    {routes.map((route, i) => (
      <Link to={route.path} key={i}>
        {i ? `Demo${i}` : 'Home'}
      </Link>
    ))}
  </nav>
)

export const SwitchRoutes = () => (
  <Switch>
    {routes.map((route, i) => (
      <Route key={i} path={route.path} component={route.component} exact={Boolean(route.exact)} />
    ))}
  </Switch>
)
