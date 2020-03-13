import React from 'react'
import { useDispatch } from 'react-redux'
import { searchStore } from '../store/search.store'

export const SearchInput = () => {
  const dispatch = useDispatch()

  return (
    <input type='text' onChange={e => dispatch(searchStore.actions.searchStart(e.target.value))} />
  )
}
