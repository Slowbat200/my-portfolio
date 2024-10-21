'use client';

import { ArrowBigDownIcon } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

import HireMe from './components/hire';
import Info from './components/Info';

import Blob from '@/components/Blob';
import CTA from '@/components/cta';
import { FlipWords } from '@/components/flip-words';

import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import Link from 'next/link';
import { Hint } from '@/components/hint';

const words = [`I'm Fullstack developer`, `I'm web developer`];

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
      <section className='flex flex-col items-center justify-between md:p-24 p-0 dark:bg-black bg-white'>
        <div className='items-center justify-between font-mono text-sm lg:flex'>
          <div className='flex flex-col'>
            <h1 className='text-[25px] text-center md:text-5xl lg:text-6xl font-bold pl-5 lg:pl-10 lg:pb-3 pt-10'>
              Hello I&apos;m Slowbat
            </h1>
            <span className='text-md sm:text-xl md:text-2xl lg:text-3xl pt-10 font-semibold text-center'>
              <FlipWords words={words} />
            </span>
            <div className='flex flex-row gap-3.5 pt-5 justify-center items-center z-10'>
              <Hint label='Instagram' side='bottom'>
                <Button variant='link'>
                  <Link href='https://www.instagram.com/slowbat201/'>
                    <FaInstagram size={34} />
                  </Link>
                </Button>
              </Hint>
              <Hint label='Github' side='bottom'>
                <Button variant='link' className='z-50'>
                  <Link href='https://github.com/Slowbat200'>
                    <FaGithub size={34} />
                  </Link>
                </Button>
              </Hint>
              <Hint label='Linkedin' side='bottom'>
                <Button variant='link' className='z-50'>
                  <Link href='https://www.linkedin.com/in/jakub-pavlovic-33b765285/'>
                    <FaLinkedin size={34} />
                  </Link>
                </Button>
              </Hint>
            </div>
          </div>
          <div className='z-50'>
            <Blob />
          </div>
        </div>
        {/** Button section with animation */}
        <section id='button'>
          <div className='md:mt-[8em] relative z-50 md:z-10 lg:mx-[8em] ml-0 md:my-[3em] md:landscape:right-[5rem] landscape:left-[0rem]'>
            <Button variant='section' onClick={handleScroll}>
              <ArrowBigDownIcon size={30} />
            </Button>
          </div>
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
