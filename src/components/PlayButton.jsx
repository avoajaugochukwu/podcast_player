import React, { useEffect, useState } from "react"

import play_button from '../img/play_button.svg'
import pause_button from '../img/pause_button.svg'

const PlayButton = ({ url }) => {
    const [audio] = useState(new Audio(url));
    audio.preload = 'none'
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [audio, playing]);
  
    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    });
  
    return (
      <>
        <img 
            src={playing ? pause_button : play_button} 
            alt="button"
            onClick={toggle}
        />
      </>
    );
  };

  export default PlayButton