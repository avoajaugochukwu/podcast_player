import React from 'react'
import { useDispatch, connect, useSelector } from 'react-redux'
import EpisodeDescription from '../components/EpisodeDescription'

import play_button from '../img/play_button.svg'
import pause_button from '../img/pause_button.svg'

const Footer = () => {
  const currentTrack = useSelector((state) => state.currentTrack)
  const { isPlaying, episode } = currentTrack

  const { episodeUrl } = episode
  return (
    <>
      {
        episodeUrl &&
        <>
          <div
            className="fixed left-0 bottom-0 min-w-full z-10"
            style={{ backgroundColor: "#1a1a1a" }}>
            <div className="relative h-full w-full flex">
              <div className="sm:w-1/3"></div>
              <div key={episode.trackId} className="flex flex-row md:p-4 p-1 ">
                <img
                  className=" rounded"
                  alt="User avatar"
                  src={episode.artworkUrl60} />

                <div className="text-gray-100 p-2 px-4 text-left">
                  <p className="">{episode.trackName}</p>
                  <EpisodeDescription description={episode.shortDescription} characterCount={100} readMore={false} />
                </div>
              </div>

            </div>
            {/* <h1 className="text-white">
              {isPlaying ?
                'Playing'
                :
                'pause'
              }
            </h1> */}
          </div>
        </>
      }

    </>

  )
}

export default Footer