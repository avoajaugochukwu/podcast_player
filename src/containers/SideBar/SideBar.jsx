import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { getGenreColor } from '../../utils/genreColor'

const SideBar = () => {

    // const { match: { params: { collectionId } } } = props

    const collectionId = '863897795'

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

    let podcastDetails

    if (results) {
        let newResults = [...results] // to create a new list, because first item in result is podcast details not episode
        // let newResults1 = [...results]
        podcastDetails = newResults[0]
    }
    return (
        <>
            {
                results &&
                <>
                    {/* ----------------- Start of Fixed Side Bar --------------------*/}
                    <aside className=" min-h-screen pt-4 px-1 w-60 text-white bg-gray-700 fixed inset-y-0 overflow-x-hidden overflow-y-auto">
                        <div className=" pb-4">
                            <Link
                                className="text-2xl font-bold text-gray-100 dark:text-white lg:text-3xl hover:text-gray-300 dark:hover:text-gray-300"
                                to="/">
                                Podcast
                            </Link>
                        </div>
                        <div className=" ">
                            {/* <!-- Extract: user_info blade partial --> */}
                            <div className="px-6 pb-6 flex items-center border-b border-gray-500 sm:flex-col">
                                {/* <div className="hidden px-3 text-white text-base rounded-full border sm:block">Username</div> */}
                                {/* <div className="mr-auto text-white flex-shrink-0 flex justify-center items-center rounded-full border-4 sm:mt-4 sm:mx-auto"> */}
                                <h1 className="text-left text-1xl pt-2 font-semibold">{podcastDetails.collectionName}</h1>
                                <p className="text-left text-gray-400 py-1 pb-2 text-xs">{podcastDetails.artistName}</p>
                                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-cover lg:rounded-lg"
                                    style={{
                                        backgroundImage: `url(${podcastDetails.artworkUrl600})`
                                    }}
                                >
                                </div>

                                <div className="text-left p-1 pt-2">
                                    {podcastDetails.genres.map(genre => (
                                        <span
                                            className={`text-xs text-white p-0.5 mr-1 rounded ${getGenreColor(genre)}`} key={genre}
                                        >
                                            {genre}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-left text-xs text-gray-300 py-3">Episodes: {podcastDetails.trackCount}</p>
                            </div>


                        </div>
                    </aside>
                    {/* ----------------- End of Fixed Side Bar --------------------*/}
                </>
            }
        </>
    )
}



const getPodcast = async (collectionId) => {
    const response = await axios.get(`https://itunes.apple.com/lookup?id=${collectionId}&country=US&media=podcast&entity=podcastEpisode&limit=10`)
    return response.data
}


export default SideBar