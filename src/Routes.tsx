import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import * as Pages from './pages'

const routes = Object.values(Pages)

export const Nav = () => (
  <nav>
    {routes.map((route, i) => (
      <Link to={'/' + route.name} key={route.name}>
        {`Demo${i + 1}`}
      </Link>
    ))}
  </nav>
)

export const SwitchRoutes = () => (
  <Switch>
    {routes.map(route => (
      <Route key={route.name} path={'/' + route.name} component={route} />
    ))}
  </Switch>
)
