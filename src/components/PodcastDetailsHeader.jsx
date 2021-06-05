import React from 'react'
import { getGenreColor, getGenreGradientColor } from '../utils/genreColor'
import ListenButton from '../components/ListenButton'

const PodcastDetailsHeader = ({ podcastDetails }) => {
  return (
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
                className={`text-xs text-white p-0.5 mr-1 rounded font-thin ${getGenreColor(genre)}`} 
                key={genre}
              >
                {genre}
              </span>
            ))}

          </div>

          <p className="text-left text-xs text-gray-300 py-1">{podcastDetails.trackCount} Episodes</p>
          
        </div>

      </div>
      <div className="px-8 flex flex-row">
              <ListenButton /> {/* the non functional red button */}
      </div>
    </div>
  )
}

export default PodcastDetailsHeader