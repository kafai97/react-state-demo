import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { Entry } from '../../api'

interface State {
  data: Entry[]
}

export const SearchResult = () => {
  const { data } = useSelector<RootState>(state => state.search) as State

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
