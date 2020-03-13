import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { Entry } from '../../api'

export const SearchResult = () => {
  const data = useSelector<RootState, Entry[] | Error>(state => state.search)

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
