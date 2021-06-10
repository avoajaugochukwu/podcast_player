import React, { useEffect, useState } from "react"
import { useDispatch, connect, useSelector } from 'react-redux'
import { withRouter } from 'react-router'
import { play, pause } from '../redux/actions/playEpisodeActions'
import play_button from '../img/play_button.svg'
import pause_button from '../img/pause_button.svg'

const PlayButton = ({ url, episode, trackId, handlePlay }) => {
  const dispatch = useDispatch()
  const currentTrack = useSelector((state) => state.currentTrack)
  const { isPlaying, episode: { episodeUrl } } = currentTrack

  let playing, paused
  if (isPlaying === true && url === episodeUrl) {
    playing = true
  }
  // const addTrackToRedux = (url) => {
  //   console.log(url)
  //   dispatch(play(url))
  //   toggle()
  // }

  const [audio] = useState(new Audio(url))
  audio.preload = 'none'
  // const [playing, setPlaying] = useState(false)

  // const toggle = () => {
  //   setPlaying(!playing)
  // }

  // const handlePlay = () => {
  //   dispatch(play(episode))
  //   // toggle()

  // }

  const handlePause = () => {
    // toggle()
    dispatch(pause())
  }
  // console.log(isPlaying)
  // useEffect(() => {
  //   toggle()
  // }, [isPlaying])
  // console.log(isPlaying)

  // useEffect(() => {
  //   playing ? audio.play() : audio.pause()

  // }, [audio, playing])

  // useEffect(() => {
  //   audio.addEventListener("ended", () => setPlaying(false))
  //   return () => {
  //     audio.removeEventListener("ended", () => setPlaying(false))
  //   };
  // });

  const handleClick = () => {
    // toggle()
    // playing ? loadPlay(url, true) : loadPlay(url, false)
    loadPlay(url, true)
    // console.log(url)
  }

  return (
    <>
      {
        playing ?
          <img
            src={pause_button}
            alt="button"
            onClick={handlePause}
            id={trackId}
          />
          :
          <img
            src={play_button}
            alt="button"
            onClick={handlePlay}
            id={trackId}
          />
      }
      {/* <p className="text-white" onClick={handleClick}>play/pause</p> */}
      {/* <audio id={trackId}>
        <source id={trackId} src={url} type="audio/mp3" />
        play/pause
      </audio> */}
    </>
  )
}

const loadPlay = (url, play) => {
  const audio = new Audio(url)
  if (play) {
    console.log('000000000000')
    audio.play().then(data => console.log(data))


  } else {
    audio.pause()
  }

}


const mapStateToProps = (state) => ({
  currentTrack: state.currentTrack
})

export default withRouter(connect(mapStateToProps, {})(PlayButton))