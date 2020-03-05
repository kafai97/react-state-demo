import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Nav, SwitchRoutes } from './Routes'
import './App.css'

export const App = () => {
  return (
    <Router>
      <Nav />
      <SwitchRoutes />
    </Router>
  )
}
