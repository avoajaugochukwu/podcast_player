import React from 'react'
// import { useDispatch, connect, useSelector } from 'react-redux'
// import { withRouter } from 'react-router'
import PlayButton from './PlayButton'
import ReleaseDate from './ReleaseDate'
import EpisodeDuration from './EpisodeDuration'
import EpisodeDescription from './EpisodeDescription'

// import { play } from '../redux/actions/playEpisodeActions'

const PodcastDetailsEpisodes = ({ episodes }) => {
  // const dispatch = useDispatch()

  // const addTrackToRedux = (url) => {
  //   console.log(url)
  //   dispatch(play(url))
    
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
                        {/* {console.log(episode)} */}
                        <PlayButton url={episode.episodeUrl} episode={episode} />
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
