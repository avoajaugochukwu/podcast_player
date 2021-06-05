import React, { useState, useEffect } from 'react'
import { useDebounce } from "use-debounce";

import axios from 'axios';

import { getGenreColor } from '../utils/genreColor'

import right_chevron_circle from '../img/chevron_circle_right_icon.svg'
import left_chevron_circle from '../img/chevron_circle_left_icon.svg'
import search_icon_black from '../img/search_icon_black.svg'

// import Loading from '../containers/Spinner/Loading'
import SearchTopGenres from '../containers/SearchTopGrenres/SearchTopGenres'

const initalText = " ";

function SearchScreen(props) {
  const [searchText, setSearchText] = useState(initalText)
  const [searchResults, setSearchResults] = useState({});
  const [debouncedText] = useDebounce(searchText, 500)

  useEffect(() => {
    const source = axios.CancelToken.source()

    if (debouncedText) {
      getPodcasts(debouncedText)
        .then(data => {
          setSearchResults(data)
        })
        .catch(err => console.log(err))
    }
    else {
      setSearchResults({})
    }
    return () => {
      source.cancel(
        "Canceled because of component unmounted or debounce Text changed"
      )
    }
  }, [debouncedText])

  const { history } = props
  const handleClick = (collectionId) => {
    history.push(`podcast/${collectionId}`)
  }

  const { resultCount, results } = searchResults

  return (
    <>
      <div className="container px-5 mx-auto">
        <div className="flex flex-row space-x-5 pt-3">
          <div className="py-3">
            <p className="bg-gray-800 rounded-full">
              <img src={left_chevron_circle} className="w-8 -p-4 rounded-full bg-gray-400 hover:bg-gray-600 cursor-pointer" alt="left_chevron" />
            </p>
          </div>

          <div className="py-3 " >
            <img src={right_chevron_circle} className="w-8 -p-4 rounded-full bg-gray-400 hover:bg-gray-600 cursor-pointer" alt="right_chevron" />

          </div>
          <div className="relative sm:w-4/12">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={search_icon_black} alt="search_icon_black" />
            </span>

            <input type="text" className="w-full py-3 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Podcast" />
          </div>
        </div>

        <div>
          <h1 className="text-left text-gray-100 text-2xl py-2 sm:pt-10 font-bold ">Top genres</h1>
          <SearchTopGenres />
        </div>








        <h1 className="text-4xl py-5">
          Find your favourite podcast
                </h1>
        <div className="rounded-lg mx-4 md:mx-36">

          <div className="flex flex-row justify-center overflow-hidden rounded-md max-w-full mx-auto">

            <input
              className="px-3 flex-grow border h-12 outline-none focus:outline-black"
              type="text"
              name="email"
              placeholder="Enter podcast name"
              aria-label="Enter podcast name"
              onChange={(e) => { setSearchText(e.target.value) }}
            />

            <button className="px-4 md:px-16 text-white  bg-blue-500 hover:bg-blue-400 h-12">
              Search
                        </button>
          </div>

          {/*  */}
          <div>
            {
              resultCount > 0 ?
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
                :
                'Please enter search'

            }
          </div>
        </div>
      </div>

    </>
  )
}


const getPodcasts = async (text) => {
  const response = await axios.get(`https://itunes.apple.com/search?term=${text}&entity=podcast`)
  return response.data
}


export default SearchScreen