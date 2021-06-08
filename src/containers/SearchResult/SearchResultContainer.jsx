import React from 'react'

import SearchResults from './SearchResults'
import SearchResultSkeleton from './SearchResultSkeleton'

const SearchResultContainer = ({ resultCount, results, handleClick }) => {
  return (
    <div className="min-h-screen w-full">
      {
        resultCount > 0 ?
        <SearchResults results={results} handleClick={handleClick} />
        :
        <SearchResultSkeleton />
      }
    </div>
  )
}

export default SearchResultContainer