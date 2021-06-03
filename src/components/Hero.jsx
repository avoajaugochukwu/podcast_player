import React from 'react'
import {
    Link
  } from 'react-router-dom'

import hero_img from '../img/undraw_audio_player_re_cl20.svg'

function Hero() {
    return (
        <>

            <header className="bg-white dark:bg-gray-800">
                {/* <NavBar /> */}

                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center md:flex">
                        <div className="w-full md:w-1/2">
                            <div className="max-w-lg">
                                <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white md:text-3xl">
                                    Minimalist Podcast Player
                                </h1>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    This podcast player offers an unobstructive player for your favorite podcasts.
                                </p>
                                {/* <button className="px-3 py-2 mt-4 text-sm font-medium text-white uppercase bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                                    Shop Now
                                </button> */}
                                <div className="mt-6">
                                    <Link to="/Search" className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400">
                                        Find your favorite podcast
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="items-center justify-center m-9 h-96">
                            <img className="w-full h-full max-w-2xl" src={hero_img} alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Hero