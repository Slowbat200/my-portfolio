'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { FireLoader } from './loader';
import { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  className?: string;
};

export const Navbar = ({ className }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleLinkLoader = () => {
    setLoading(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
    }, 2000);
  };

  return (
    <motion.nav
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     viewport={{once: true}}
      transition={{ duration: 0.8, delay: 0.3}}
      className={cn(`fixed z-50 top-10 inset-x-0 max-w-4xl mx-auto`, className)}
    >
      {loading && (
        <div className='fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-[9999]'>
          <FireLoader loading={loading} size={50} />
        </div>
      )}
      {/* Colors updated for christmas, the previouse colors for dark border is:00fff  */}
      <div className='flex justify-evenly items-center h-full border border-t-[#588C73] border-b-[#F2E394] dark:border-t-[#EC255A] dark:border-s-[#FAEDF0] dark:border-b-[#FAEDF0] dark:border-e-[#EC255A] shadow-input rounded-full py-5 bg-transparent backdrop-blur-xl'>
        <div className='pr-[100px]'>
          <h1 className='text-3xl text-white'>Slowbat</h1>  {/** Text is white because of the snowfall */}
        </div>
        <Link href='/' onClick={handleLinkLoader}>
          <span className='text-white'>Home</span> {/** Text is white because of the snowfall */}
        </Link>
        <Link href='/about' onClick={handleLinkLoader}>
          <span className='text-white'>About Me</span> {/** Text is white because of the snowfall */}
        </Link>
        <Link href='/projects' onClick={handleLinkLoader}>
          <span className='text-white'>My Projects</span> {/** Text is white because of the snowfall */}
        </Link>
        <Link href='/contact' onClick={handleLinkLoader}>
          <span className='text-white'>Contact Me</span> {/** Text is white because of the snowfall */}
        </Link>
        <ModeToggle />
      </div>
    </motion.nav>
  );
};
