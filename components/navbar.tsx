'use client';

import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { MobileSidebar } from '@/components/mobile-sidebar';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { useProModal } from '@/hooks/use-sub-modal';

const font = Poppins({
  weight: '600',
  subsets: ['latin'],
});

interface sub {
  isPro: boolean;
}
export const Navbar = ({ isPro }: sub) => {
  const [mounted, setMounted] = useState(false);
  const promodal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  if (isPro) return null;
  return (
    <div className='fixed w-full z-50 flex justify-between items-center py-2 px-4 bg-white border-b-2 dark:border-0 dark:bg-black h-16'>
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
        <Button
          onClick={promodal.onOpen}
          className='w-fit'
          variant={'premium'}
        >Support me</Button>
        {/** Creating Dark/Light mode toggler */}
        <ModeToggle />
        {/** Creating UserButton which creating account information */}
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
};
