import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { searchStart } from '../store/reducers'

export const SearchInput = () => {
  const dispatch: AppDispatch = useDispatch()
  return <input type='text' onChange={e => dispatch(searchStart(e.target.value))} />
}
