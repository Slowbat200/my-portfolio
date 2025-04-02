'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { ModeToggle } from './mode-toggle';

const BackgroundPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    audioRef.current = new Audio('/spring.mp3');
    audioRef.current.volume = 0.3;
    audioRef.current.loop = true;
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className='fixed flex flex-row-reverse gap-x-5 justify-center items-center left-5 bottom-5 z-40'>
      <div className='flex md:hidden'>
        {' '}
        <ModeToggle />
      </div>
      <div className='dark:bg-[#9F7AEA] bg-[#ba9ef3] text-white rounded-full p-2'>
        {isPlaying ? (
          <VolumeX
            onClick={togglePlay}
            className='w-7 h-7 md:h-8 md:w-8 cursor-pointer'
          />
        ) : (
          <Volume2
            onClick={togglePlay}
            className='w-7 h-7 md:h-8 md:w-8 cursor-pointer'
          />
        )}
      </div>
    </div>
  );
};

export default BackgroundPlayer;
