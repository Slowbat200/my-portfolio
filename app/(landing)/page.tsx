'use client';

import { Button } from '@/components/ui/button';
import { ArrowBigDownIcon } from 'lucide-react';
import Info from './components/Info';
import { Separator } from '@/components/ui/separator';
import CTA from '@/components/cta';
import { motion } from 'framer-motion';
import HireMe from './components/hire';
import { FlipWords } from '@/components/flip-words';
import { fadeIn } from '@/utils/motion';
import Blob from '@/components/Blob';
import { BackgroundBeams } from '@/components/ui/background-beams';




const words = [`I'm Fullstack developer`, `I'm web developer`];

export default function Home () {
 
  const handleScroll = () => {
    // Find the next section by its ID or class
    const nextSection = document.getElementById('next-section');

    // Scroll to the next section if it exists
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main className='w-full h-full relative'>
        <section className='flex flex-col items-center justify-between p-24 bg-black'>
          <div className='items-center justify-between font-mono text-sm lg:flex'>
            <div className='flex flex-col'>
              <motion.h1
                className='text-[30px] text-center md:text-5xl lg:text-6xl font-bold pl-5 lg:pl-10 lg:pb-3 pt-10'
                variants={fadeIn('left', 'tween', 0.5, 1)}
                initial='hidden'
                whileInView='show'
              >
                Hello I&apos;m Slowbat
              </motion.h1>
              <span className='text-md sm:text-xl md:text-2xl lg:text-3xl pt-10 font-semibold text-center'>
                <FlipWords words={words} />
              </span>
            </div>
            <Blob />
          </div>
          {/** Button section with animation */}
          <section id='button'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className='mt-[8em] relative z-50 lg:mx-[8em] ml-0 md:my-3em  md:landscape:right-[5rem] landscape:left-[0rem]'
            >
              <Button variant='section' onClick={handleScroll}>
                <ArrowBigDownIcon size={30} />
              </Button>
            </motion.div>
          </section>
        </section>
      <BackgroundBeams />

      {/** Info and CTA section */}
      <section id='next-section' className='dark:bg-black'>
        <div className='relative'>
          <div className='gradient-02' />
        </div>
        <div>
          <Info />
        </div>
        <div className='pt-16 px-10'>
          <HireMe />
        </div>
        <div className='max-container'>
          <Separator className='bg-gradient-to-r from-[#45ffca] to-[#ffb6d9]' />
          <CTA />
          <div className='gradient-03 absolute w-[10%] h-[10%] inset-0' />
        </div>
      </section>
    </main>
  );
}
