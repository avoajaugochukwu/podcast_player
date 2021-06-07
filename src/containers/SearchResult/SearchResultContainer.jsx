import React from 'react'

import SearchResults from './SearchResults'

const SearchResultContainer = ({ resultCount, results, handleClick }) => {
  return (
    <div className="min-h-screen w-full bg-gray-600">
      {
        resultCount > 0 ?
        <SearchResults results={results} handleClick={handleClick} />
        :
        <h1 className="text-white">'Please enter search'</h1>
      }
    </div>
  )
}

export default SearchResultContainer