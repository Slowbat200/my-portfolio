'use client'

import { useState, useEffect, useRef } from "react";

const BackgroundPlayer:React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    useEffect(() => {
      audioRef.current = new Audio('/slap-house.mp3')
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }, [])

    const togglePlay = () => {
        if(audioRef.current){
            if(isPlaying){
                audioRef.current.pause()
            }else{
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }
    return(
        <div className='fixed bottom-2 left-2'>
        <img
          src={isPlaying ? '/soundoff.png' : '/soundon.png'}
          alt='jukebox'
          onClick={togglePlay}
          className='w-14 h-14 md:h-10 md:w-10 cursor-pointer object-contain'
        />
      </div>
    )
}

export default BackgroundPlayer;