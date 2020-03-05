import { connect, useSelector } from 'react-redux'
import React, { Component } from 'react'
import { RootState } from './store'

class MyCounter extends Component<ReturnType<typeof mapStateToProps>> {
  render() {
    return <h3>{this.props.count}</h3>
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    count: state.count,
  }
}

export const Counter = connect(mapStateToProps)(MyCounter)

// export const Counter = () => {
//   const count = useSelector<RootState>(state => state.count)
//   return <h1>{count as number}</h1>
// }
