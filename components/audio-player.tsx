'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const BackgroundPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    audioRef.current = new Audio('/christmas.mp3');
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
    <div className='fixed bottom-5 left-2 z-40 dark:bg-[#C80036] bg-[#FF6969] text-white rounded-full p-2'>
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
  );
};

export default BackgroundPlayer;
