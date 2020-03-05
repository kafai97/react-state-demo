import { connect, useDispatch } from 'react-redux'
import React, { Component } from 'react'
import { AppDispatch } from './store'

class DoCountComponent extends Component<ReturnType<typeof mapDispatchToProps>> {
  render() {
    return (
      <>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  increment: () =>
    dispatch({
      type: 'PLUS',
      payload: 1,
    }),
  decrement: () =>
    dispatch({
      type: 'MINUS',
      payload: 1,
    }),
})

export const DoCount = connect(null, mapDispatchToProps)(DoCountComponent)

// export const DoCount = () => {
//   const dispatch: AppDispatch = useDispatch()
//   const increment = () =>
//     dispatch({
//       type: 'PLUS',
//       payload: 1,
//     })

//   const decrement = () =>
//     dispatch({
//       type: 'MINUS',
//       payload: 1,
//     })

//   return (
//     <>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </>
//   )
// }
