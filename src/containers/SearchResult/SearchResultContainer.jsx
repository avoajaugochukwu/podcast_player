import React from 'react'

import SearchResults from './SearchResults'
import SearchResultBlank from './SearchResultBlank'

const SearchResultContainer = ({ resultCount, results, handleClick }) => {
  return (
    <div className="min-h-screen w-full">
      {
        resultCount > 0 ?
        <SearchResults results={results} handleClick={handleClick} />
        :
        <SearchResultBlank />
      }
    </div>
  )
}

export default SearchResultContainer