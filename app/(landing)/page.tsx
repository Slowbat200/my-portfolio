'use client';

import Image from 'next/image';
import { HeroHighlight } from '@/components/ui/hero-highlight';
import TypewriterComponent from 'typewriter-effect';
import { Button } from '@/components/ui/button';
import { ArrowBigDownIcon } from 'lucide-react';
import Info from './components/Info';
import { Separator } from '@/components/ui/separator';
import CTA from '@/components/cta';
import { motion } from 'framer-motion';

export default function Home() {
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
      <HeroHighlight>
        <section className='flex min-h-screen flex-col items-center justify-between p-24'>
          <div className='z-10 lg:w-full w-[20em] max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
            <div className='flex flex-col'>
              <motion.h1
                className='text-[22px] md:text-5xl lg:text-6xl font-bold pl-5 lg:pl-10 lg:pb-3'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Hello I&apos;m Slowbat
              </motion.h1>
              <div className='md:ml-[100px] mr-[1px] flex justify-center pb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600'>
                <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl gap-y-10 font-semibold'>
                  <TypewriterComponent
                    options={{
                      strings: [`I'm Fullstack developer`, `I'm web developer`],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
          {/** Image section with starting animation */}
          <section id='image'>
            <motion.div
              className='flex flex-col gap-y-5'
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1,
                ease: 'easeIn',
                type: 'spring',
                stiffness: 100,
              }}
            >
              <Image
                src='/profile.png'
                alt='profile'
                width={300}
                height={300}
              />
            </motion.div>
          </section>
          {/** Button section with animation */}
          <section id='button'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className='my-[5em] lg:mx-[8em] ml-0 md:mt-[40px] md:landscape:right-[5rem] landscape:left-[0rem]'
            >
              <Button variant='section' onClick={handleScroll}>
                <ArrowBigDownIcon size={30} />
              </Button>
            </motion.div>
          </section>
        </section>
      </HeroHighlight>

      {/** Info and CTA section */}
      <section id='next-section' className='dark:bg-black'>
        <div className='relative'>
          <div className='gradient-02' />
        </div>
        <div className=''>
          <Info />
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
