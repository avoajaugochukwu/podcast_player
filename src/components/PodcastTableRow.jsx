import React from 'react'

import PlayButton from '../components/PlayButton'
import ReleaseDate from '../components/ReleaseDate'
import EpisodeDuration from '../components/EpisodeDuration'


const PodcastTableRow = (props) => {
    const { episodes } = props

    return (
        <>
            {
                episodes &&
                <>
                    {episodes.slice(0, 7).map(item => (
                        <div
                            key={item.releaseDate}
                            className="my-3"
                            // onClick={() => { handleClick(item.collectionId) }}
                        >
                            <div 
                                className="flex w-full max-w-full mx-auto overflow-hidden 
                                            hover:bg-gray-900 border-b border-gray-800
                                            shadow-md dark:bg-gray-800 px-4">
                                {/* <div className="w-2 bg-gray-800 dark:bg-gray-900"></div> */}

                                <img
                                    className="object-cover w-32 h-32 rounded my-6"
                                    alt="User avatar"
                                    src={item.artworkUrl160} />

                                <div className="flex items-center">
                                    <div className="pl-3">
                                        <div className=" dark:text-gray-200">
                                            <p className="font-medium pb-2 text-white">{item.trackName}</p>
                                            <p className=" text-xs truncate-description">{item.description}</p>
                                                
                                            <div className="pt-3 flex ">
                                                <div>
                                                    <PlayButton url={item.episodeUrl} />
                                                </div>
                                                <div className="pl-3">
                                                    <ReleaseDate date={item.releaseDate} />
                                                </div>
                                                
                                                <div>
                                                    <EpisodeDuration duration={item.trackTimeMillis} />
                                                </div>
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

export default PodcastTableRow