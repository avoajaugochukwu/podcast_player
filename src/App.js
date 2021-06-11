
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import SideBar from './containers/SideBar/SideBar'
import MainSection from './containers/MainSection/MainSection'
import FooterPlayer from './components/FooterPlayer'

import { useDispatch, useSelector } from 'react-redux'
import { play, pause } from './redux/actions/playEpisodeActions'

import './App.css';
// @Todo: Find a way to add the dynamic title to the app
function App() {
  const [audio, setAudio] = useState({})
  const dispatch = useDispatch()
  const currentTrack = useSelector((state) => state.currentTrack)
  const { episode: { episodeUrl } } = currentTrack

  document.title = 'Podcast Player' 

  const handlePlay = (episode) => (e) => {  
    let sound
    if (!episodeUrl) {
      sound = new Audio(episode.episodeUrl)
      sound.play()
      setAudio(sound)
      dispatch(play(episode))
    } else if (episodeUrl !== episode.episodeUrl) {
      audio.pause()
      sound = new Audio(episode.episodeUrl)
      sound.play()
      setAudio(sound)
      dispatch(play(episode))
    } else {
      audio.play()
      dispatch(play(episode))
    }
  }

  const handlePause = () => {
    audio.pause()
    dispatch(pause())
  }


  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex relative">
          <SideBar />
          <MainSection handlePause={handlePause} handlePlay={handlePlay}  />
          <FooterPlayer handlePause={handlePause} handlePlay={handlePlay} state={{ audio: [audio, setAudio]}} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
