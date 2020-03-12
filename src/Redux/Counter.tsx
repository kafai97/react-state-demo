import { connect, useSelector } from 'react-redux'
import React, { Component } from 'react'
import { RootState } from './store'

type Props = ReturnType<typeof mapStateToProps>

class MyCounter extends Component<Props> {
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

/**
 * Funtional Component with Hooks
 */
export const CounterFC = () => {
  const count = useSelector<RootState>(state => state.count)
  return <h1>{count as number}</h1>
}
