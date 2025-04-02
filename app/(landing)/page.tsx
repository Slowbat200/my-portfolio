'use client';

import { ArrowBigDownIcon } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import HireMe from './components/hire';
import Info from './components/Info';
import { Footer } from './components/footer';

import Blob from '@/components/Blob';
import { CTA } from '@/components/cta';
import { FlipWords } from '@/components/flip-words';

import { Button } from '@/components/ui/button';

import Link from 'next/link';
import { Hint } from '@/components/hint';
import { FireLoader } from '@/components/loader';

const words = [`I'm Fullstack developer`, `I'm web developer`];

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate loading for demonstration
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Remove this in production
  }, []);

  // Hide overflow when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

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
      {loading && (
        <div className='fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-[9999]'>
          <FireLoader loading={loading} size={50} />
        </div>
      )}
      <section
        className='flex flex-col items-center justify-between md:p-24 p-0 h-screen winter-layout dark:bg-gradient-to-br dark:from-[#22543D] dark:via-[#2C7A7B] dark:to-[#9F7AEA] bg-gradient-to-br from-[#F0FFF4] via-[#D1FAE5] to-[#F0FFF4] z-50'
      >
        <motion.div
          className='items-center justify-between font-mono text-sm lg:flex'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex flex-col'>
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className='text-[25px] text-center md:text-5xl lg:text-6xl font-bold pl-5 lg:pl-10 lg:pb-3 pt-10 z-40 text-[#1F2937] dark:text-white'
            >
              {/** Text is white because of the winter */}
              Hello I&apos;m Slowbat
            </motion.h1>
            <span className='text-md sm:text-xl md:text-2xl lg:text-3xl pt-10 font-semibold text-center text-white'>
              {' '}
              <FlipWords words={words} />
            </span>
            <div className='flex flex-row gap-3.5 pt-5 justify-center items-center z-10'>
              <Hint label='Instagram' side='bottom'>
                <Button variant='link' className='z-50 dark:bg-transparent'>
                  <Link href='https://www.instagram.com/slowbat201/'>
                    <FaInstagram size={34} />
                  </Link>
                </Button>
              </Hint>
              <Hint label='Github' side='bottom'>
                <Button variant='link' className='z-50 dark:bg-transparent'>
                  <Link href='https://github.com/Slowbat200'>
                    <FaGithub size={34} />
                  </Link>
                </Button>
              </Hint>
              <Hint label='Linkedin' side='bottom'>
                <Button variant='link' className='z-50 dark:bg-transparent'>
                  <Link href='https://www.linkedin.com/in/jakub-pavlovic-33b765285/'>
                    <FaLinkedin size={34} />
                  </Link>
                </Button>
              </Hint>
            </div>
          </div>
          <div className='z-10 md:w-[400px] md:h-[400px] h-[350px] w-[350px]'>
            <Blob />
          </div>
        </motion.div>
        {/** Button section with animation */}
        <section id='button'>
          <div className='md:mt-[5em] my-10 relative md:z-10 lg:mx-[8em] ml-0 md:my-[3em] md:landscape:right-[5rem] landscape:left-[0rem]'>
            <Button variant='section' onClick={handleScroll}>
              <ArrowBigDownIcon
                size={30}
                className='text-[#1F2937] dark:text-white hover:text-white'
              />{' '}
              {/** Text is gray because of the winter */}
            </Button>
          </div>
        </section>
      </section>
      {/** Info and CTA section */}
      <section id='next-section' className='dark:bg-[#22543D] bg-[#F0FFF4]'>
        <div className='relative'>
          <div className='gradient-02' />
        </div>
        <div>
          <Info />
        </div>
        <div className='relative'>
          <div className='gradient-03' />
        </div>
        <div className='pt-16 px-10'>
          <HireMe />
        </div>
        <div className='relative'>
          <div className='gradient-02' />
        </div>
        <div className='max-container'>
          <CTA />
          <div className='gradient-03 absolute w-[10%] h-[10%] inset-0' />
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </main>
  );
}
