import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(`fixed z-50 top-10 inset-x-0 max-w-4xl mx-auto`, className)}
    >
      <div className='flex justify-evenly items-center h-full border border-transparent dark:border-[#00FFFF] shadow-input rounded-full py-5 bg-transparent backdrop-blur-xl'>
        <div className='pr-[100px]'>
          <h1 className='text-3xl'>Slowbat</h1>
        </div>
        <Link href='/'>
          <span>Home</span>
        </Link>
        <Link href='/about'>
          <span>About Me</span>
        </Link>
        <Link href='/projects'>
          <span>My Projects</span>
        </Link>
        <Link href='/contact'>
          <span>Contact Me</span>
        </Link>
      <ModeToggle />
      </div>
    </nav>
  );
};
