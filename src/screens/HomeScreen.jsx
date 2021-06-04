import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchHomePodcasts } from '../redux/actions/homePodcastsActions'

import HomePodcastSection from '../components/HomePodcastSection'
import Loading from '../containers/Spinner/Loading'

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

    let popularPodcasts, crimePodcasts, comedyPodcasts, politicsPodcasts

    if (podcasts) {
        popularPodcasts = podcasts.slice(0, 5)
        crimePodcasts = podcasts.slice(5, 10)
        comedyPodcasts = podcasts.slice(10, 15)
        politicsPodcasts = podcasts.slice(15, 20)
    }

    setTimeout(() => {
        if (error) {
            // Task use error page instead of 
            console.log('I got error')
            // return <Redirect to='/500' />
        }
    }, 3000)

    const { history } = props

    return (
        <>
            {
                podcasts ?
                    <>
                        <section className="container px-5 mx-auto">
                            <HomePodcastSection header={'Popular podcasts'} podcasts={popularPodcasts} history={history} />
                            <HomePodcastSection header={'Top crime podcasts'} podcasts={crimePodcasts} history={history} />
                            <HomePodcastSection header={'Top comedy podcasts'} podcasts={comedyPodcasts} history={history} />
                            <HomePodcastSection header={'Top politics podcasts'} podcasts={politicsPodcasts} history={history} />
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