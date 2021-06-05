import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ListenButton from '../components/ListenButton'
import PodcastTable from '../components/PodcastTable'

import { getGenreColor, getGenreGradientColor } from '../utils/genreColor'

import Loading from '../containers/Spinner/Loading'

function PodcastDetailsScreen(props) {
  const { match: { params: { collectionId } } } = props

  const [podcast, setPodcast] = useState({})

  useEffect(() => {
    const fetchAPI = async () => {
      getPodcast(collectionId)
        .then(data => {
          setPodcast(data)
        })
        .catch(err => console.log(err))
    };
    fetchAPI();
  }, [collectionId]);

  const { results } = podcast

  let podcastList, podcastDetails

  if (results) {
    let newResults = [...results] // to create a new list, because first item in result is podcast details not episode
    let newResults1 = [...results]
    podcastDetails = newResults1[0]
    podcastList = newResults.splice(1, newResults.length)
  }
  // console.log(podcastDetails)
  // console.log(podcastList)
  return (
    <>
      {
        results ?
          <>
            <div className={` bg-gradient-to-b ${getGenreGradientColor(podcastDetails.genres[0])}`}>
              <div className="px-8 pt-28 py-6 flex flex-row flex-grow">
                <div className=" w-1/5">
                  <img src={podcastDetails.artworkUrl600} className="rounded-lg" alt={podcastDetails.artworkUrl600} />
                </div>

                <div className="text-left pl-4 rounded shadow font-semibold hover:shadow-md">
                  <h1 className="text-left text-gray-100 text-5xl pt-5 sm:pt-10 font-black ">
                    {podcastDetails.collectionName}
                  </h1>
                  <p className="text-left text-gray-100 py-1 pb-1 text-sm font-thin">
                    {podcastDetails.artistName}
                  </p>
                  <div className="text-left p-1">
                    {podcastDetails.genres.map(genre => (
                      <span
                        className={`text-xs text-white p-0.5 mr-1 rounded font-thin ${getGenreColor(genre)}`} key={genre}
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  <p className="text-left text-xs text-gray-300 py-1">{podcastDetails.trackCount} Episodes</p>
                </div>
              </div>
            </div>
            <div className="px-8 flex flex-row">
              <ListenButton />
            </div>
            <div className="px-8 flex flex-row">
              <PodcastTable episodes={podcastList} />
            </div>
          </>
          :
          <>
            <Loading />
          </>
      }
    </>

  )
}


const getPodcast = async (collectionId) => {
  const response = await axios.get(`https://itunes.apple.com/lookup?id=${collectionId}&country=US&media=podcast&entity=podcastEpisode&limit=10`)
  return response.data
}




export default PodcastDetailsScreen


