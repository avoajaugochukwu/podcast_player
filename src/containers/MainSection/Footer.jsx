import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../img/logo.svg'

const Footer = () => {
  return (
    <>

      <footer className=" flex flex-row items-center justify-between px-10 py-4 mt-10 dark:bg-gray-800 sm:flex-row">
        <div className="flex flex-row">
          <img src={logo} alt='logo' className="w-12" />
          <Link className="text-1xl  text-white dark:text-white hover:text-gray-100 dark:hover:text-gray-300" to="/">
            pplayer
          </Link>
        </div>

        <p className="py-2 text-gray-500 dark:text-white sm:py-0">MIT License</p>

        <div className="flex -mx-2">
          <a href="http://github.com" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
            Github
          </a>

          <a href="htttp://twitter.com" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Facebook">
            Twitter
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer