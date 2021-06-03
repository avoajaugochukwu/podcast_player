import React from 'react'


const ListenButton = () => {
    return (

        <button className="flex items-center px-8 py-2 font-medium tracking-wide text-white capitalize 
            transition-colors duration-200 transform bg-red-400 rounded-full dark:bg-gray-800 
            hover:bg-red-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 
            dark:focus:bg-gray-700">
            <svg className="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            <span className="mx-1 text-xs">Listen</span>
        </button>
    )
}


export default ListenButton