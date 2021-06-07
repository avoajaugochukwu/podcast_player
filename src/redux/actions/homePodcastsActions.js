import axios from 'axios'
import { HOMESCREEN_API_URL } from '../../utils/consts'
import { HOME_PODCAST_LIST_REQUEST, HOME_PODCAST_LIST_SUCCESS, HOME_PODCAST_LIST_FAILURE } from '../reducers/homePodcastsReducer'

localStorage.removeItem('homePodcasts')
export const fetchHomePodcasts = async (dispatch, getState) => {
    dispatch({
        type: HOME_PODCAST_LIST_REQUEST
    })

    // localStorage.removeItem('homePodcasts')

    const homePodcasts = localStorage.getItem('homePodcasts') ? JSON.parse(localStorage.getItem('homePodcasts')) : undefined
    // console.log(homePodcasts)
    
    if (homePodcasts !== undefined) {
        dispatch({
            type: HOME_PODCAST_LIST_SUCCESS,
            payload: homePodcasts
        })
        // console.log('podcasts in local storage... API call not triggered')
    } else {
        await axios
        .get(HOMESCREEN_API_URL)
        .then(res => {
            dispatch({
                type: HOME_PODCAST_LIST_SUCCESS,
                payload: res.data.results
            })
            // console.log(res.data.results)
            localStorage.setItem('homePodcasts', JSON.stringify(res.data.results))
        })
        .catch(error => {
            dispatch({
                type: HOME_PODCAST_LIST_FAILURE,
                payload: error
            })
            
        })

        // console.info('podcasts not in local storage... API call triggered.')
    }
}

