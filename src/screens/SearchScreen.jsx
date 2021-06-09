import React, { useState, useEffect } from 'react'
import { useDebounce } from "use-debounce";

import axios from 'axios';

import SearchResultContainer from '../containers/SearchResult/SearchResultContainer'

import right_chevron_circle from '../img/chevron_circle_right_icon.svg'
import left_chevron_circle from '../img/chevron_circle_left_icon.svg'
import search_icon_black from '../img/search_icon_black.svg'

// import Loading from '../containers/Spinner/Loading'
import SearchTopGenres from '../containers/SearchTopGrenres/SearchTopGenres'
import { BASE_URL } from '../utils/consts'

const initalText = " ";

function SearchScreen(props) {
  const [searchText, setSearchText] = useState(initalText)
  const [searchPodcastResults, setSearchPodcastResults] = useState({})
  const [searchEpisodeResults, setSearchEpisodeResults] = useState({})
  const [debouncedText] = useDebounce(searchText, 500)
  const [activeSearchText, setActiveSearchText] = useState('') // Remove 't' when you are done

  useEffect(() => {
    const source = axios.CancelToken.source()

    if (debouncedText) {
      getPodcasts(debouncedText)
        .then(data => {
          setSearchPodcastResults(data)
        })
        .catch(err => console.log(err))

      getEpisodes(debouncedText)
        .then(data => {
          setSearchEpisodeResults(data)
        })
        .catch(err => console.log(err))
    }
    else {
      setSearchPodcastResults({})
      setSearchEpisodeResults({})
    }

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
  
  const handleBack = () => {
    history.goBack()
  }

  const { resultCount: podcastResultCount, results: podcastResults } = searchPodcastResults
  const { resultCount: episodeResultCount, results: episodeResults } = searchEpisodeResults


  return (
    <>
      <div className="container px-5 mx-auto">
        <div className="flex flex-row space-x-5 pt-3">
          <div className="py-3">
            <p className="bg-gray-800 rounded-full">
              <img 
                src={left_chevron_circle} 
                className="w-8 -p-4 rounded-full bg-gray-400 hover:bg-gray-600 cursor-pointer" 
                alt="left_chevron"
                onClick={() => handleBack()}
                 />
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


        {
          activeSearchText !== ''
            ?
            <SearchResultContainer
              podcastResultCount={podcastResultCount}
              podcastResults={podcastResults}
              episodeResultCount={episodeResultCount}
              episodeResults={episodeResults}
              activeSearchText={activeSearchText}
              handleClick={handleClick} />
            :
            <SearchTopGenres />
        }
      </div>

    </>
  )
}


const getPodcasts = async (text) => {
  const response = await axios.get(`${BASE_URL}search?term=${text}&entity=podcast`)
  return response.data
}

const getEpisodes = async (text) => {
  const response = await axios.get(`${BASE_URL}search?term=${text}&entity=podcastEpisode&limit=4`)
  return response.data
}

export default SearchScreen