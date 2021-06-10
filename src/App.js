
import React, { useEffect, useState} from 'react'
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
  // const currentTrack = useSelector((state) => state.currentTrack)
  // const { isPlaying, episode: { episodeUrl } } = currentTrack
  // console.log(audio)
  const handlePlay = (episode) => (e) => {
    
    // const x = document.getElementById(episode.episodeUrl)
    const x = new Audio(episode.episodeUrl)
    setAudio(x)
    dispatch(play(episode))
    // dispatch(play(audio))
    stopAllAudio()
    x.play()
    
  }

  const handlePause = (episode) => (e) => {
    // const x = document.getElementById(episode.episodeUrl)
    // const x = new Audio(episode.episodeUrl)
    audio.pause()
    dispatch(pause())
    // console.log(x)
  }

  const stopAllAudio = () => {
    var allAudios = document.querySelectorAll('audio');
    allAudios.forEach(function (audio) {
      audio.pause();
    });
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
