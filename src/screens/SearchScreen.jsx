import React, { useState, useEffect } from 'react'
import { useDebounce } from "use-debounce";

import axios from 'axios';

import { getGenreColor } from '../utils/genreColor'

import SearchResultContainer from '../containers/SearchResult/SearchResultContainer'

import right_chevron_circle from '../img/chevron_circle_right_icon.svg'
import left_chevron_circle from '../img/chevron_circle_left_icon.svg'
import search_icon_black from '../img/search_icon_black.svg'

// import Loading from '../containers/Spinner/Loading'
import SearchTopGenres from '../containers/SearchTopGrenres/SearchTopGenres'
import SearchResults from '../containers/SearchResult/SearchResults'
import { BASE_URL } from '../utils/consts'

const initalText = " ";

function SearchScreen(props) {
  const [searchText, setSearchText] = useState(initalText)
  const [searchResults, setSearchResults] = useState({});
  const [debouncedText] = useDebounce(searchText, 500)
  const [activeSearchText, setActiveSearchText] = useState('')

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
    console.log(searchText)
    return () => {
      source.cancel(
        "Canceled because of component unmounted or debounce Text changed"
      )
    }
  }, [debouncedText, searchText])

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

            <input
              type="text"
              className="w-full py-3 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Podcast"
              aria-label="Podcast"
              onChange={(e) => {
                setSearchText(e.target.value)
                setActiveSearchText(e.target.value)
              }} />
          </div>
        </div>

        {/* <div>
          {
            resultCount > 0 ?
              <SearchResults results={results} handleClick={handleClick} />
              :
              <h1 className="text-white">'Please enter search'</h1>
          }
        </div> */}

        {/* <div>
          <h1 className="text-left text-gray-100 text-2xl py-2 sm:pt-10 font-bold ">Top genres</h1>
          <SearchTopGenres />
        </div> */}

        {
          activeSearchText !== '' 
            ? 
          <SearchResultContainer resultCount={resultCount} results={results} handleClick={handleClick} /> 
          : 
          <SearchTopGenres  />
        }

        {/* <h1 className="text-white">{activeSearchText}</h1> */}







        
        <div className="rounded-lg mx-4 md:mx-36">

          <div className="flex flex-row justify-center overflow-hidden rounded-md max-w-full mx-auto">

            <input
              className="px-3 flex-grow border h-12 outline-none focus:outline-black"
              type="text"

              placeholder="Enter podcast name"
              aria-label="Enter podcast name"
              onChange={(e) => {
                setSearchText(e.target.value)
                setActiveSearchText(e.target.value)

              }}
            />

            <button className="px-4 md:px-16 text-white  bg-blue-500 hover:bg-blue-400 h-12">
              Search
            </button>
          </div>

          {/*  */}

        </div>
      </div>

    </>
  )
}


const getPodcasts = async (text) => {
  const response = await axios.get(`${BASE_URL}search?term=${text}&entity=podcast`)
  return response.data
}


export default SearchScreen