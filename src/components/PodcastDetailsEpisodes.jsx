import React from 'react'

import PlayButton from './PlayButton'
import ReleaseDate from './ReleaseDate'
import EpisodeDuration from './EpisodeDuration'
import EpisodeDescription from './EpisodeDescription'

const PodcastDetailsEpisodes = ({ episodes }) => {

  return (
    <>
      {
        episodes &&
        <>
          {episodes.map(item => (
            <div
              key={item.releaseDate}
              className="my-3"
            >
              <div
                className="flex w-full max-w-full mx-auto overflow-hidden 
                                            hover:bg-gray-900 border-b border-gray-800
                                            shadow-md dark:bg-gray-800 px-4  py-6">
                <img
                  className="object-cover w-32 h-32 rounded"
                  alt="User avatar"
                  src={item.artworkUrl160} />

                <div className="flex items-center">
                  <div className="pl-3">
                    <div className=" dark:text-gray-200">
                      <h3 className="font-medium pb-2 text-white">{item.trackName}</h3>
                      <EpisodeDescription description={item.description} />
                      <div className="pt-3 flex ">
                        <PlayButton url={item.episodeUrl} />
                        <ReleaseDate date={item.releaseDate} />
                        <EpisodeDuration duration={item.trackTimeMillis} />
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

export default PodcastDetailsEpisodes