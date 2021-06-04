import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const GenreListScreen = (props) => {
  const { match: { params: { genreId } } } = props

  const [podcasts, setPodcasts] = useState({})

  useEffect(() => {
    const fetchAPI = async () => {
      getPodcasts(genreId)
        .then(data => {
          setPodcasts(data)
        })
        .catch(err => console.log(err))
    };
    fetchAPI();
  }, [genreId]);

  const { results } = podcasts

  console.log(genreId)
  console.log(results)

  const history = useHistory()
  const handleClick = (collectionId) => {
    history.push(`podcast/${collectionId}`)
  }


  return (
    <>
      {
        results &&
        <>
        <div className="bg-gray-900 hover:bg-gray-800 pl-2 pt-2 pr-2 rounded-lg">
          <div className="flex flex-wrap">
            {
              results.map(podcast => (
                <div
                  className="xl:w-1/5 md:w-1/2 px-2"
                  key={podcast.collectionName}

                >
                  <div onClick={() => handleClick(podcast.collectionId)}>
                    <div className="p-3 bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-lg">
                      <img className="rounded-lg w-full object-contain mb-1" src={podcast.artworkUrl600} alt="content" />

                      <div className="min-h-full h-14">
                        <h2 className="text-left mt-2 home-screen-truncate-collection-name text-sm text-white font-medium title-font">
                          {podcast.collectionName}
                        </h2>
                        <p className="text-left pt-1 text-gray-400 text-xs">
                          {podcast.artistName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          </div>
        </>
      }
    </>
  )
}

export default GenreListScreen

const getPodcasts = async (genreId) => {
  const response = await axios.get(`https://itunes.apple.com/search?term=podcast&genreId=${genreId}&limit=10`)
  return response.data
}