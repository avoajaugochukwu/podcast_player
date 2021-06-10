import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { withRouter } from 'react-router'
import ReleaseDate from './ReleaseDate'
import EpisodeDuration from './EpisodeDuration'
import EpisodeDescription from './EpisodeDescription'

import play_button from '../img/play_button.svg'
import pause_button from '../img/pause_button.svg'

import { play, pause } from '../redux/actions/playEpisodeActions'

const PodcastDetailsEpisodes = ({ episodes }) => {
  const dispatch = useDispatch()
  const currentTrack = useSelector((state) => state.currentTrack)
  const { isPlaying, episode: { episodeUrl } } = currentTrack

  const handlePlay = (episode) => (e) => {
    const x = document.getElementById(episode.episodeUrl)
    dispatch(play(episode))
    x.play()
  }

  const handlePause = (episode) => (e) => {
    const x = document.getElementById(episode.episodeUrl)
    x.pause()
    dispatch(pause())
  }

  // const handleClick = (episode) => (e) => {
  //   dispatch(play(episode))
  // }

  return (
    <>
      {
        episodes &&
        <>
          {episodes.map(episode => (
            <div
              key={episode.releaseDate}
              className="my-3"
            >
              <div
                className="flex w-full max-w-full mx-auto overflow-hidden 
                                            hover:bg-gray-900 border-b border-gray-800
                                            shadow-md dark:bg-gray-800 px-4  py-6">
                <img
                  className="object-cover w-32 h-32 rounded"
                  alt="User avatar"
                  src={episode.artworkUrl160} />

                <div className="flex items-center">
                  <div className="pl-3">
                    <div className=" dark:text-gray-200">
                      <h3 className="font-medium pb-2 text-white">{episode.trackName}</h3>
                      <EpisodeDescription description={episode.description} />
                      <div className="pt-3 flex ">
                        {
                          isPlaying === true && episodeUrl === episode.episodeUrl ?
                            <img
                              src={pause_button}
                              alt="button"
                              onClick={(e) => handlePause(episode)(e)}
                              id={episode.trackId}
                            />
                            :
                            <img
                              src={play_button}
                              alt="button"
                              onClick={(e) => handlePlay(episode)(e)}
                              id={episode.trackId}
                            />
                        }
                        <audio src={episode.episodeUrl} preload="none" id={episode.episodeUrl}></audio>
                        {/* <p onClick={(e) => handleClick(episode)(e)}>play/pause</p> */}
                        <ReleaseDate date={episode.releaseDate} />
                        <EpisodeDuration duration={episode.trackTimeMillis} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))

          }
        </>
      }



    </>
  )
}

// const mapStateToProps = (state) => ({
//   currentTrack: state.currentTrack
// })

export default PodcastDetailsEpisodes
