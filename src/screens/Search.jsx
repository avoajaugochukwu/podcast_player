import React, { useState, useEffect } from 'react'
import { useDebounce } from "use-debounce";

import NavBar from '../components/NavBar'
import axios from 'axios';

import { getGenreColor } from '../utils/genreColor'

// import Loading from '../containers/Spinner/Loading'

const initalText = " ";

function Search(props) {
    const [searchText, setSearchText] = useState(initalText)
    const [searchResults, setSearchResults] = useState({});
    const [debouncedText] = useDebounce(searchText, 500)

    useEffect(() => {
        const source = axios.CancelToken.source()

        if (debouncedText) {
            getPodcasts(debouncedText)
                .then(data => {
                    setSearchResults(data)
                })
                .catch(err => console.log(err))
        }
        else {
            setSearchResults({})
        }
        return () => {
            source.cancel(
                "Canceled because of component unmounted or debounce Text changed"
            )
        }
    }, [debouncedText])

    const { history } = props
    const handleClick = (collectionId) => {
        history.push(`podcast/${collectionId}`)
    }

    const { resultCount, results } = searchResults

    return (
        <>
            <NavBar />

            <div className="container mx-auto">
                <h1 className="text-4xl py-5">
                    Find your favourite podcast
            </h1>
                <div className="rounded-lg mx-4 md:mx-36">

                    <div className="flex flex-row justify-center overflow-hidden rounded-md max-w-full mx-auto">

                        <input
                            className="px-3 flex-grow border h-12 outline-none focus:outline-black"
                            type="text"
                            name="email"
                            placeholder="Enter podcast name"
                            aria-label="Enter podcast name"
                            onChange={(e) => { setSearchText(e.target.value) }}
                        />

                        <button className="px-4 md:px-16 text-white  bg-blue-500 hover:bg-blue-400 h-12">
                            Search
                        </button>
                    </div>

                    {/*  */}
                    <div>
                        {
                            resultCount > 0 ?
                                results.map(item => (
                                    <div
                                        key={item.collectionId}
                                        className="my-3"
                                        onClick={() => { handleClick(item.collectionId) }}
                                    >

                                        <div className="flex w-full max-w-full mx-auto overflow-hidden bg-white hover:bg-gray-100 cursor-pointer rounded-lg shadow-md dark:bg-gray-800">
                                            <div className="w-2 bg-gray-800 dark:bg-gray-900"></div>

                                            <div className="flex items-center px-2 py-3">
                                                <img
                                                    className="object-cover w-24 h-24 rounded"
                                                    alt="User avatar"
                                                    src={item.artworkUrl100} />

                                                <div className="ml-3">
                                                    <div className="text-gray-600 dark:text-gray-200">
                                                        <p className="text-left text-gray-900">{item.trackName}</p>

                                                        <p className="text-left text-sm">{item.artistName}</p>

                                                        <div className="text-left">
                                                            {item.genres.map(genre => (
                                                                <span
                                                                    className={`text-xs text-white p-0.5 mr-1 rounded ${getGenreColor(genre)}`} key={genre}
                                                                >
                                                                    {genre}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                :
                                'Please enter search'

                        }
                    </div>
                </div>
            </div>
            
        </>
    )
}


const getPodcasts = async (text) => {
    const response = await axios.get(`https://itunes.apple.com/search?term=${text}&entity=podcast`)
    return response.data
}


export default Search