import { useSelector } from 'react-redux'
import React from 'react'
import { RootState } from './store'

export const Counter = () => {
  const count = useSelector<RootState, number>(state => state.count)
  return <h3>{count}</h3>
}
