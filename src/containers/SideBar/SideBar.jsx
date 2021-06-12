import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'

import { BASE_URL } from '../../utils/consts'


import logo from '../../img/logo.svg'
import home_logo from '../../img/home_icon.svg'
import search_icon from '../../img/search_icon_white.svg'
// Show 5 random episodes that can be played immediately

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

  return (
    <>
      {
        results &&
        <>
          {/* ----------------- Start of Fixed Side Bar --------------------*/}
          <aside className="min-h-screen pt-4 md:px-1 px-0 w-0 md:w-60 text-white bg-gray-900 relative md:fixed hidden md:inline-block relative">
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
            </div>
          </aside>
          {/* ----------------- End of Fixed Side Bar --------------------*/}
        </>
      }
    </>
  )
}



const getPodcast = async (collectionId) => {
  const response = await axios.get(`${BASE_URL}lookup?id=${collectionId}&country=US&media=podcast&entity=podcastEpisode&limit=10`)
  return response.data
}


export default SideBar