'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { Button } from './ui/button';

import { FireLoader } from './loader';

import { cn } from '@/lib/utils';

import { Press_Start_2P } from 'next/font/google';

import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

const font = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
});

export const CTA = () => {
  const [loading, setLoading] = useState(false);

  const handleCtaLoader = () => {
    setLoading(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
    }, 2000);
  };
  return (
    <motion.section
      className='cta'
      variants={fadeIn('up', 'spring', 0.2, 1)}
      initial='hidden'
      whileInView='show'
    >
      {loading && (
        <div className='fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-[9999]'>
          <FireLoader loading={loading} size={50} />
        </div>
      )}
      <p className='cta-text z-40'>
        Have a projects in your mind? <br className='sm:block hidden' />{' '}
        Let&apos;s build it together
      </p>
      <Button className='btn hover:scale-110 hover:bg-[#2DD4BF] transition z-40'>
        <Link
          onClick={handleCtaLoader}
          href='/contact'
          className={cn(font.className)}
        >
          Contact me
        </Link>
      </Button>
    </motion.section>
  );
};
