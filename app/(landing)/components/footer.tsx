'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Hint } from '@/components/hint';

import { FaInstagram, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { motion } from 'framer-motion';
import { footerVariants } from '@/utils/motion';

export const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial='hidden'
      animate='show'
      className='dark:bg-[#1C4532] bg-[#D1FAE5] text-[#065F46] dark:text-[#A7F3D0] py-10 px-5 md:px-10'
    >
      <div className='container mx-auto mb-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Logo or Brand Name */}
        <div className='text-center md:text-left'>
          <h1 className='text-3xl font-bold'>Slowbat</h1>
          <p className='mt-2 text-sm'>
          Delivering exceptional experiences through innovative design and
          cutting-edge development.
          </p>
        </div>

        {/* Navigation Links */}
        <div className='text-center'>
          <h3 className='text-xl font-semibold '>Quick Links</h3>
          <ul className='mt-4 flex flex-col justify-center items-center space-y-2'>
            <li>
              <Link
                href='/about'
                className='text-[#374151 ] hover:text-neon-green'
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href='/projects'
                className='text-[#374151 ] hover:text-neon-green'
              >
                Projects
              </Link>
            </li>
            <li>
              <a
                href='/contact'
                className='text-[#374151 ] hover:text-neon-green'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Social Media Icons */}
        <div>
          <h3 className='text-xl font-semibold text-center '>
            Social Links
          </h3>
          <div className='flex justify-center items-center col-span-2 space-x-3.5 mt-4'>
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
            <Hint label='Youtube' side='bottom'>
              <Button variant='link' className='z-50'>
                <Link href='https://www.youtube.com/@CodeWithSlowbat'>
                  <FaYoutube size={34} />
                </Link>
              </Button>
            </Hint>
          </div>
        </div>
      </div>
      <Separator />

      {/* Copyright */}
      <div className='mt-8 text-center dark:text-gray-300 text-[#1C1B29]'>
        <p>Coded with &#x2764;&#xfe0f; by Slowbat</p>
      </div>
    </motion.footer>
  );
};
