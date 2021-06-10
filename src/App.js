
import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import SideBar from './containers/SideBar/SideBar'
import MainSection from './containers/MainSection/MainSection'
import Footer from './components/Footer'

import { useDispatch, useSelector } from 'react-redux'
import { play, pause } from './redux/actions/playEpisodeActions'

import './App.css';
// @Todo: Find a way to add the dynamic title to the app
function App() {
  const dispatch = useDispatch()
  // const currentTrack = useSelector((state) => state.currentTrack)
  // const { isPlaying, episode: { episodeUrl } } = currentTrack

  const handlePlay = (episode) => (e) => {
    const x = document.getElementById(episode.episodeUrl)
    dispatch(play(episode))
    stopAllAudio()
    x.play()
  }

  const handlePause = (episode) => (e) => {
    const x = document.getElementById(episode.episodeUrl)
    x.pause()
    dispatch(pause())
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
          <Footer handlePause={handlePause} handlePlay={handlePlay} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
