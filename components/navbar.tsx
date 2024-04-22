'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { MobileSidebar } from '@/components/mobile-sidebar';

const font = Poppins({
  weight: '600',
  subsets: ['latin'],
});
export const Navbar = () => {
  return (
    <div className='fixed w-full z-50 flex justify-between items-center py-2 px-4 dark:bg-black h-16'>
      <div className='flex items-center'>
        {/** Menu: Creating navbar with hamburger menu in mobile devices */}
        <MobileSidebar />
        {/** Creating heading as a link */}
        <Link href='/'>
          <h1
            className={cn(
              //primary className
              'hidden md:block text-xl md:text-3xl font-bold text-primary',
              //dynamic className
              font.className
            )}
          >
            Slowbat
          </h1>
        </Link>
      </div>
      {/** Creating Buttons in Navbar */}
      <div className='flex items-center gap-x-3'>
        {/** Creating Dark/Light mode toggler */}
        <ModeToggle />
        {/** Creating UserButton which creating account information */}
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
};
