// This component will only show on mobile sized viewports
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../img/logo.svg'
import home_logo from '../img/home_icon.svg'
import search_icon from '../img/search_icon_white.svg'

const MobileHeader = () => {
  return (
    <div className="block md:hidden w-full text-white bg-gray-900">
      <div className="flex flex-row ">
        <div className="flex flex-row py-4">
          <img src={logo} alt='logo' />
          <Link
            className="text-2xl  text-white dark:text-white lg:text-3xl hover:text-gray-100 dark:hover:text-gray-300"
            to="/">
            pplayer
              </Link>
        </div>
        <div className="text-left pt-3">
          <NavLink className="flex mx-2 my-1 rounded p-2 px-4 hover:bg-gray-800" activeClassName="bg-gray-800" exact to="/">
            <img src={home_logo} alt='home_icon' />
            <span className="ml-4">Home</span>
          </NavLink>
        </div>
        <div className="text-left pt-3">
          <div>
            <NavLink className="flex mx-2 my-1 rounded p-2 px-4 hover:bg-gray-800" activeClassName="bg-gray-800" exact to="/search">
              <img src={search_icon} alt='search_icon' />
              <span className="ml-4">Search</span>
            </NavLink>
          </div>
        </div>
        <div className="mt-3 flex flex-col">
          <a href="https://github.com/avoajaugochukwu/podcast_player" className="mx-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
            Github
          </a>

          <a href="https://twitter.com/avoajacharles" className="mx-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Facebook">
            Twitter
          </a>
        </div>
      </div>
    </div>
  )
}

export default MobileHeader