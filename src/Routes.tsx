import React from 'react'
import { RxjsHook } from './4-RxjsHooks'
import { Redux } from './1-Redux'
import { UnstatedNext } from './2-Unstated-next'
import { Link, Switch, Route } from 'react-router-dom'
import { Reto } from './3-Reto'

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
    component: () => <h3>TODO</h3>,
  },
]

export const Nav = () => (
  <nav>
    {routes.map((route, i) => (
      <Link to={route.path} key={i}>
        |-{i ? `Demo${i}` : 'Home'}-|
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
