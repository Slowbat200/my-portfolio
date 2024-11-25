import React from 'react';

import { FloatingDock } from './ui/floating-docks';

import EmailIcon from '@mui/icons-material/Email';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
export function MobileNavbar() {
  const links = [
    {
      title: 'Home',
      icon: (
        <HomeIcon className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: '/',
    },

    {
      title: 'About',
      icon: <PersonIcon />,
      href: '/about',
    },
    {
      title: 'Project',
      icon: <FolderIcon />,
      href: '/projects',
    },
    {
      title: 'Contact',
      icon: <EmailIcon />,
      href: '/contact',
    },
  ];
  return (
    <div className='fixed bottom-5 right-5 flex items-center justify-end h-fit z-50'>
      <FloatingDock items={links} />
    </div>
  );
}
