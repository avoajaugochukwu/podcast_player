import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'

import { getGenreColor } from '../../utils/genreColor'
import logo from '../../img/logo.svg'
import home_logo from '../../img/home_icon.svg'
import search_icon from '../../img/search_icon_white.svg'

const SideBar = () => {

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
        podcastDetails = newResults[0]
    }

    return (
        <>
            {
                results &&
                <>
                    {/* ----------------- Start of Fixed Side Bar --------------------*/}
                    <aside className=" min-h-screen pt-4 px-1 w-60 text-white bg-gray-900 bg-black fixed inset-y-0 overflow-x-hidden overflow-y-auto">
                        <div className="flex flex-row py-4">
                            <img src={logo} alt='logo' />
                            <Link
                                className="text-2xl  text-white dark:text-white lg:text-3xl hover:text-gray-100 dark:hover:text-gray-300"
                                to="/">
                                pplayer
                            </Link>
                        </div>
                        <div className="text-left">
                            <div>
                                <NavLink className="flex mx-2 my-1 rounded p-2 hover:bg-gray-800" activeClassName="bg-gray-800" exact to="/">
                                    <img src={home_logo} alt='home_icon' />
                                    <span className="ml-4">Home</span>
                                </NavLink>
                            </div>
                            <div>
                                <NavLink className="flex mx-2 my-1 rounded p-2 hover:bg-gray-800" activeClassName="bg-gray-800" exact to="/search">
                                    <img src={search_icon} alt='search_icon' />
                                    <span className="ml-4">Search</span>
                                </NavLink>
                            </div>
                            {/* <div className="flex hover:bg-gray-700 mx-2 p-2 rounded cursor-pointer">
                                <img src={search_icon} alt='logo' />
                                <NavLink className="ml-4" to="/search">
                                    Search
                                </NavLink>
                            </div> */}
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
    const response = await axios.get(`https://secret-beyond-79263.herokuapp.com/https://itunes.apple.com/lookup?id=${collectionId}&country=US&media=podcast&entity=podcastEpisode&limit=10`)
    return response.data
}


export default SideBar