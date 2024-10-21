'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { FireLoader } from './loader';
import { useState } from 'react';

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
    <nav
      className={cn(`fixed z-50 top-10 inset-x-0 max-w-4xl mx-auto`, className)}
    >
      {loading && (
        <div className='fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-[9999]'>
          <FireLoader loading={loading} size={50} />
        </div>
      )}
      <div className='flex justify-evenly items-center h-full border border-transparent dark:border-[#00FFFF] shadow-input rounded-full py-5 bg-transparent backdrop-blur-xl'>
        <div className='pr-[100px]'>
          <h1 className='text-3xl'>Slowbat</h1>
        </div>
        <Link href='/' onClick={handleLinkLoader}>
          <span>Home</span>
        </Link>
        <Link href='/about' onClick={handleLinkLoader}>
          <span>About Me</span>
        </Link>
        <Link href='/projects' onClick={handleLinkLoader}>
          <span>My Projects</span>
        </Link>
        <Link href='/contact' onClick={handleLinkLoader}>
          <span>Contact Me</span>
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};
