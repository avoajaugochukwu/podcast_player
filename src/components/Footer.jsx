import React from 'react'
import { useDispatch, connect, useSelector } from 'react-redux'

const Footer = () => {
  const currentTrack = useSelector((state) => state.currentTrack)
  const { playing } = currentTrack
  return (
    <h1 className="text-white">
      {playing ?
        'Playing'
        :
        'pause'
      }
    </h1>
  )
}

export default Footer