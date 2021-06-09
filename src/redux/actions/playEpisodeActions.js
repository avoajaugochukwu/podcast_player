import { EPISODE_PLAY_REQUEST, EPISODE_PLAYING, EPISODE_PAUSE } from '../reducers/playEpisodeReducer'


export const play = (episode) => async (dispatch, getState) => {
  // const { currentTrack: { playing } } = getState()

  // console.log(trackId)
  dispatch ({
    type: EPISODE_PLAY_REQUEST,
    payload: episode
  })

  try {
    dispatch({
      type: EPISODE_PLAYING,
      payload: episode
    })
  } catch (error) {

  }
}


export const pause = () => (dispatch, getState) => {
  dispatch({
    type: EPISODE_PAUSE
  })
}