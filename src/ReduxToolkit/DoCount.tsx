import { useDispatch } from 'react-redux'
import React from 'react'
import { counterActions } from './store'

export const DoCount = () => {
  const dispatch = useDispatch()

  const plusOne = () => dispatch(counterActions.increment(1))
  const minusOne = () => dispatch(counterActions.decrement(1))

  return (
    <>
      <button onClick={plusOne}>+</button>
      <button onClick={minusOne}>-</button>
    </>
  )
}
