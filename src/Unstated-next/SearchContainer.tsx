import { useState } from 'react'
import { getData, Entry } from '../api'
import { createContainer } from 'unstated-next'

const useSearch = (initialState = [] as Entry[]) => {
  const [searchResult, setSearchResult] = useState(initialState)

  const doSearch = async (title: string) => {
    try {
      const data = await getData({ title })
      setSearchResult(data)
    } catch (e) {
      setSearchResult(e)
    }
  }

  return { searchResult, doSearch }
}

export const SearchContainer = createContainer(useSearch)
