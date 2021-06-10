import React from 'react'
import { useDispatch, connect, useSelector } from 'react-redux'

const Footer = () => {
  const currentTrack = useSelector((state) => state.currentTrack)
  const { isPlaying, episode } = currentTrack

  const { episodeUrl } = episode
  return (
    <>
    {
      episodeUrl && 
      <>
        <div
        className="fixed left-0 bottom-0 min-w-full z-10 h-24 bg-gray-800 transition delay-150 duration-300 ease-in-out"
        style={{ backgroundColor: "#1a1a1a", transition: "height 100s" }}>

        <h1 className="text-white">
          {isPlaying ?
            'Playing'
            :
            'pause'
          }
        </h1>
      </div>
      </>
    }
      
    </>

  )
}

export default Footer