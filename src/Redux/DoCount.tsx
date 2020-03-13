import { connect, useDispatch } from 'react-redux'
import React, { Component } from 'react'
import { AppDispatch, increment, decrement } from './store'

type DispatchProps = ReturnType<typeof mapDispatchToProps>

class DoCountComponent extends Component<DispatchProps> {
  render() {
    return (
      <>
        <button onClick={this.props.plusOne}>+</button>
        <button onClick={this.props.minusOne}>-</button>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  plusOne: () => dispatch(increment(1)),
  minusOne: () => dispatch(decrement(1)),
})

export const DoCount = connect(null, mapDispatchToProps)(DoCountComponent)

/**
 * Funtional Component with Hooks
 */
export const DoCountFC = () => {
  const dispatch = useDispatch()

  const plusOne = () => dispatch(increment(1))
  const minusOne = () => dispatch(decrement(1))

  return (
    <>
      <button onClick={plusOne}>+</button>
      <button onClick={minusOne}>-</button>
    </>
  )
}
