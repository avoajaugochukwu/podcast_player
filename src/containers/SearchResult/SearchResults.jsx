import React from 'react'
import { getGenreColor } from '../../utils/genreColor'
import EpisodeDescription from '../../components/EpisodeDescription'
import PlayButton from '../../components/PlayButton'
import ReleaseDate from '../../components/ReleaseDate'
import EpisodeDuration from '../../components/EpisodeDuration'

const SearchResults = ({ podcastResults, episodeResults, activeSearchText, handleClick }) => {
  const topResult = podcastResults[0]
  const secondToFifthResult = episodeResults

  return (
    <>
      <div className="flex flex-row space-x-4">
        <div className="w-2/5 p-4">
          <h1 className="text-left text-gray-100 text-2xl font-bold pb-5">Top result</h1>
          <div className="bg-gray-900 p-5 rounded-lg hover:bg-gray-800">

            <img
              className="object-cover w-32 h-32 rounded-lg"
              alt="User avatar"
              src={topResult.artworkUrl600} />

            <div className="pt-5 text-gray-300 text-left">
              <h3 className="text-xl text-gray-200">{topResult.trackName}</h3>
              <p>{topResult.artistName}</p>
              <div className="text-left pt-4">
                {topResult.genres.map(genre => (
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
        {/*  */}
        <div className="w-3/5 p-4">
          <h1 className="text-left text-gray-100 text-2xl font-bold pb-5">Episodes</h1>
          {
            secondToFifthResult.map(item => (
              <div key={item.collectionId} className="flex flex-row bg-gray-900 mb-2 hover:bg-gray-800">
                <img
                  className="object-cover rounded"
                  alt="User avatar"
                  src={item.artworkUrl60} />
                <div className="text-gray-100 p-2 px-4 text-left">
                  <p className="">{item.trackName}</p>
                  <EpisodeDescription description={item.shortDescription} />
                  {/* <div className="pt-3 flex ">
                    <PlayButton url={item.episodeUrl} />
                    <ReleaseDate date={item.releaseDate} />
                    <EpisodeDuration duration={item.trackTimeMillis} />
                  </div> */}
                </div>

              </div>
            ))
          }
        </div>
      </div>

      <h1 className="text-left text-gray-100 text-2xl font-bold pb-5">Search result for '{activeSearchText}'</h1>
      {
        podcastResults.map(item => (
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
      }
    </>
  )
}

export default SearchResults