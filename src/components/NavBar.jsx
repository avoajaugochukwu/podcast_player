import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
    return (

        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div>
                        <Link 
                            className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" 
                            to="/"
                        >
                            Podcast
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar