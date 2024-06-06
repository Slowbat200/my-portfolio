'use client'

import { useState, useEffect, useRef } from "react";

const BackgroundPlayer:React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    useEffect(() => {
      audioRef.current = new Audio('/sakura.mp3')
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
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    )
}

export default BackgroundPlayer;