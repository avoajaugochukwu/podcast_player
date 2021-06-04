import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchHomePodcasts } from '../redux/actions/homePodcastsActions'

import Loading from '../containers/Spinner/Loading'

// @Todo
// Remove the 4 sections of podcast on this page into a component so that we would have a shorter line and cleaner updates
// When the space between podcast is clicked it goes to a podcast, change padding to margin

function HomeScreen(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchAPI = async () => {
            dispatch(fetchHomePodcasts)
        }
        fetchAPI()
    }, [dispatch])

    const result = useSelector((state) => state.home)
    const { podcasts, error } = result

    let popularPodcasts, crimePodcasts, comedyPodcasts, otherPodcasts

    if (podcasts) {
        popularPodcasts = [...podcasts]
        crimePodcasts = [...podcasts]
        comedyPodcasts = [...podcasts]
        otherPodcasts = [...podcasts]
    }
    
    setTimeout(() => {
        if (error) {
            // Task use error page instead of 
            console.log('I got error')
            // return <Redirect to='/500' />
        }
    }, 3000)


    // const [podcast, setPodcast] = useState({})

    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         getHomeScreenPodcast()
    //             .then(data => {
    //                 setPodcast(data)
    //             })
    //             .catch(err => console.log(err))
    //     };
    //     fetchAPI();
    // }, []);

    // const { results } = podcast

    // console.log(results)

    const { history } = props
    const handleClick = (collectionId) => {
        history.push(`podcast/${collectionId}`)
    }

    return (
        <>
            {
                podcasts ?
                <>
                    <section className="">
                        <div className="container px-5 mx-auto">
                            <div>
                                <h1 className="text-left text-gray-100 text-2xl py-2 sm:pt-10 font-bold ">
                                    Popular podcasts
                                </h1>
                            </div>
                            <div className="flex flex-wrap flex-row">
                                {
                                    popularPodcasts.splice(0, 5).map(podcast => (
                                        <div 
                                            className="xl:w-1/5 md:w-1/2 pr-4" 
                                            key={podcast.collectionName}
                                            onClick={() => handleClick(podcast.collectionId)}
                                        >
                                            <div className="p-3 bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-lg">
                                                <img className="rounded-lg w-full object-contain mb-1" src={podcast.artworkUrl600} alt="content" />
                                                
                                                <div className="min-h-full h-14">
                                                    <h2 className="text-left mt-2 home-screen-truncate-collection-name text-sm text-white font-medium title-font">
                                                        {podcast.collectionName}
                                                    </h2>
                                                    <p className="text-left pt-1 text-gray-400 text-xs">
                                                        {podcast.artistName}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>


                            <div>
                                <h1 className="text-left text-gray-100 text-2xl py-2 sm:pt-6 font-bold ">
                                    Top crime podcasts
                                </h1>
                            </div>
                            <div className="flex flex-wrap flex-row">
                                {
                                    crimePodcasts.splice(5, 5).map(podcast => (
                                        <div 
                                            className="xl:w-1/5 md:w-1/2 pr-4" 
                                            key={podcast.collectionName}
                                            onClick={() => handleClick(podcast.collectionId)}
                                        >
                                            <div className="p-3 bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-lg">
                                                <img className="rounded-lg w-full object-contain mb-1" src={podcast.artworkUrl600} alt="content" />
                                                
                                                <div className="min-h-full h-14">
                                                    <h2 className="text-left mt-2 home-screen-truncate-collection-name text-sm text-white font-medium title-font">
                                                        {podcast.collectionName}
                                                    </h2>
                                                    <p className="text-left pt-1 text-gray-400 text-xs">
                                                        {podcast.artistName}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>


                            <div>
                                <h1 className="text-left text-gray-100 text-2xl py-2 sm:pt-6 font-bold ">
                                    Top comedy podcasts
                                </h1>
                            </div>
                            <div className="flex flex-wrap flex-row">
                                {
                                    comedyPodcasts.splice(10, 5).map(podcast => (
                                        <div 
                                            className="xl:w-1/5 md:w-1/2 pr-4" 
                                            key={podcast.collectionName}
                                            onClick={() => handleClick(podcast.collectionId)}
                                        >
                                            <div className="p-3 bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-lg">
                                                <img className="rounded-lg w-full object-contain mb-1" src={podcast.artworkUrl600} alt="content" />
                                                
                                                <div className="min-h-full h-14">
                                                    <h2 className="text-left mt-2 home-screen-truncate-collection-name text-sm text-white font-medium title-font">
                                                        {podcast.collectionName}
                                                    </h2>
                                                    <p className="text-left pt-1 text-gray-400 text-xs">
                                                        {podcast.artistName}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>


                            <div>
                                <h1 className="text-left text-gray-100 text-2xl py-2 sm:pt-6 font-bold ">
                                    Top politics podcasts
                                </h1>
                            </div>
                            <div className="flex flex-wrap flex-row">
                                {
                                    otherPodcasts.splice(15, otherPodcasts.length).map(podcast => (
                                        <div 
                                            className="xl:w-1/5 md:w-1/2 pr-4" 
                                            key={podcast.collectionName}
                                            onClick={() => handleClick(podcast.collectionId)}
                                        >
                                            <div className="p-3 bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-lg">
                                                <img className="rounded-lg w-full object-contain mb-1" src={podcast.artworkUrl600} alt="content" />
                                                
                                                <div className="min-h-full h-14">
                                                    <h2 className="text-left mt-2 home-screen-truncate-collection-name text-sm text-white font-medium title-font">
                                                        {podcast.collectionName}
                                                    </h2>
                                                    <p className="text-left pt-1 text-gray-400 text-xs">
                                                        {podcast.artistName}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                </>
                :
                <>
                    <Loading />
                </>
            }
            

        </>
    )
}


export default HomeScreen