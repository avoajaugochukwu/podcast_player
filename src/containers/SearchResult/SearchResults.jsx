import React from 'react'
import { getGenreColor } from '../../utils/genreColor'


const SearchResults = ({ results, handleClick }) => {
  return (
    <>
      {
        results.map(item => (
          <div
            key={item.collectionId}
            className="my-3"
            onClick={() => { handleClick(item.collectionId) }}
          >

            <div className="flex w-full max-w-full mx-auto overflow-hidden bg-white hover:bg-gray-100 cursor-pointer rounded-lg shadow-md dark:bg-gray-800">
              <div className="w-2 bg-gray-800 dark:bg-gray-900"></div>

              <div className="flex items-center px-2 py-3">
                <img
                  className="object-cover w-24 h-24 rounded"
                  alt="User avatar"
                  src={item.artworkUrl100} />

                <div className="ml-3">
                  <div className="text-gray-600 dark:text-gray-200">
                    <p className="text-left text-gray-900">{item.trackName}</p>

                    <p className="text-left text-sm">{item.artistName}</p>

                    <div className="text-left">
                      {item.genres.map(genre => (
                        <span
                          className={`text-xs text-white p-0.5 mr-1 rounded ${getGenreColor(genre)}`} key={genre}
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default SearchResults