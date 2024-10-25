'use client'

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Hint } from '@/components/hint';

import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {

  return (
    <footer className='bg-gray-900 text-white py-10 px-5 md:px-10'>
      <div className='container mx-auto mb-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Logo or Brand Name */}
        <div className='text-center md:text-left'>
          <h1 className='text-3xl font-bold neon-text'>Slowbat</h1>
          <p className='mt-2 text-sm text-gray-400'>
            Delivering exceptional experiences through innovative design and cutting-edge development.
          </p>
        </div>

        {/* Navigation Links */}
        <div className='text-center md:text-left'>
          <h3 className='text-xl font-semibold neon-text'>Quick Links</h3>
          <ul className='mt-4 space-y-2'>
            <li>
              <Link
                href='/about'
                className='text-gray-300 hover:text-neon-green'
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href='/projects'
                className='text-gray-300 hover:text-neon-green'
              >
                Projects
              </Link>
            </li>
            <li>
              <a
                href='/contact'
                className='text-gray-300 hover:text-neon-green'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Newsletter Subscription */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold neon-text">Subscribe</h3>
          <p className="mt-2 text-sm text-gray-400">
            Stay updated with my latest projects and posts.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l-md bg-gray-800 text-white focus:outline-none"
              disabled
            />
            <Button
            disabled
              type="submit"
              className="px-4 py-2 bg-neon_green text-gray-900 rounded-r-md hover:bg-green-500"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    <Separator />
      {/* Social Media Icons */}
      <div className='mt-8 flex justify-center space-x-6 text-xl text-gray-300'>
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

      {/* Copyright */}
      <div className='mt-8 text-center text-gray-500'>
        <p>Created with &#x2764;&#xfe0f; by Slowbat</p>
      </div>
    </footer>
  );
};
