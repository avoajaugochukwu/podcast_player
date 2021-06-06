import axios from 'axios'

import { HOME_PODCAST_LIST_REQUEST, HOME_PODCAST_LIST_SUCCESS, HOME_PODCAST_LIST_FAILURE } from '../reducers/homePodcastsReducer'



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
        // console.log('podcasts in local storage... API not triggered')
    } else {
        await axios
        .get(
          `https://itunes.apple.com/lookup?id=278981407,863897795,1191775648,582272991,1200361736,1322200189,1379959217,998568017,1081244497,1062418176,1334878780,316045799,480486345,265307784,643055307,1057255460,1077418457,268213039,1258635512,169078375&country=US&media=podcast&entity=podcastEpisode&limit=0`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*"
            }
          })
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

        // console.info('podcasts not in local storage... API triggered.')
    }
}

