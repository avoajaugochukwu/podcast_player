import React, { useEffect, useState } from "react"
import { useDispatch, connect, useSelector } from 'react-redux'
import { withRouter } from 'react-router'
import { play, pause } from '../redux/actions/playEpisodeActions'
import play_button from '../img/play_button.svg'
import pause_button from '../img/pause_button.svg'

const PlayButton = ({ url, episode }) => {
  const dispatch = useDispatch()
  const currentTrack = useSelector((state) => state.currentTrack)
  const { isPlaying } = currentTrack
  // const addTrackToRedux = (url) => {
  //   console.log(url)
  //   dispatch(play(url))
  //   toggle()
  // }

  const [audio] = useState(new Audio(url))
  audio.preload = 'none'
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    setPlaying(!playing)
  }

  const handlePlay = () => {
    toggle()
    dispatch(play(episode))
  }

  const handlePause = () => {
    toggle()
    dispatch(pause())
  }

  // useEffect(() => {
  //   toggle()
  // }, [isPlaying])
  console.log(isPlaying)

  useEffect(() => {
    // playing ? audio.play() : audio.pause()
    if (playing) {
      audio.play()
      .then(console.log('You can now display pause'))
    }
    if (playing === false) {
      audio.pause()
    }
  }, [audio, playing])

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false))
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false))
    };
  });

  return (
    <>
      {
        playing ?
          <img
            src={pause_button}
            alt="button"
            onClick={handlePause} />
          :
          <img
            src={play_button}
            alt="button"
            onClick={handlePlay}
          />
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  currentTrack: state.currentTrack
})

export default withRouter(connect(mapStateToProps, {})(PlayButton))