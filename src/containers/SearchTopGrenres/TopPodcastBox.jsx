import React, { useEffect, useState } from 'react'
import axios from 'axios'



const TopPodcastBox = (props) => {

  // console.log(props)

  const { genreId } = props

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

  return (
    <>
      {
        results &&
        <>
          <div className="xl:w-1/4 md:w-1/2 p-2">
            <div className="p-1 rounded-lg ">
              <div className="flex flex-wrap pt-2">
                {results.map(podcast => (
                  <div className="w-1/2" key={podcast.collectionId}>
                    <img src={podcast.artworkUrl600} alt="pod_art" className="w-full" />
                  </div>
                ))}
              </div>
              <h3>{results[0].genres[0]}</h3>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default TopPodcastBox


const getPodcasts = async (genreId) => {
  const response = await axios.get(`https://itunes.apple.com/search?term=podcast&genreId=${genreId}&limit=4`)
  return response.data
}