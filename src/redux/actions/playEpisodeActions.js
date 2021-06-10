import { EPISODE_PLAY_REQUEST, EPISODE_PLAYING, EPISODE_PAUSE } from '../reducers/playEpisodeReducer'


export const play = (episode) => async (dispatch, getState) => {
  // const { currentTrack: { playing } } = getState()

  const episodeDetails = getEpisodeDetails(episode)
  // console.log(episodeDetails)
  
  dispatch ({
    type: EPISODE_PLAY_REQUEST,
    payload: episodeDetails
  })

  try {
    dispatch({
      type: EPISODE_PLAYING
    })
  } catch (error) {

  }
}


export const pause = () => (dispatch, getState) => {
  dispatch({
    type: EPISODE_PAUSE
  })
}

export const getEpisodeDetails = (episode) => {
  // console.log(episode)
  const { episodeUrl, artworkUrl60, trackId, trackTimeMillis, trackName, shortDescription, collectionName } = episode

  const episodeDetails = {
    episodeUrl,
    artworkUrl60, 
    trackId, 
    trackTimeMillis, 
    trackName, 
    shortDescription, 
    collectionName
  }
  return episodeDetails
}