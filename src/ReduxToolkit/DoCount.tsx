import { useDispatch } from 'react-redux'
import React from 'react'
import { countStore } from './store'

export const DoCount = () => {
  const dispatch = useDispatch()

  const plusOne = () => dispatch(countStore.actions.increment(1))
  const minusOne = () => dispatch(countStore.actions.decrement(1))

  return (
    <>
      <button onClick={plusOne}>+</button>
      <button onClick={minusOne}>-</button>
    </>
  )
}
