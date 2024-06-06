'use client';

import { cn } from '@/lib/utils';
import { Home, User, Laptop2, Contact } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  /* The `routes` constant is an array of objects that define the navigation routes for the sidebar
  component. Each object represents a route and contains the following properties: */
  const routes = [
    {
      icon: Home,
      href: '/',
      label: 'Home',
    },
    {
      icon: User,
      href: '/about',
      label: 'About',
    },
    {
      icon:Laptop2,
      href: '/projects',
      label: 'Projects',
    },
    {
      icon:Contact,
      href: '/contact',
      label: 'Contact',
    },
  ];

  /**
   * The function `onNavigate` takes a URL and a boolean value as parameters and uses the `router.push`
   * method to navigate to the specified URL.
   * @param {string} url - A string representing the URL that the router should navigate to.
   * @returns The `router.push(url)` function is being returned.
   */
  const onNavigate = (url: string) => {
    return router.push(url);
  };
  return (
    <div className='space-y-4 flex flex-col h-full text-primary dark:bg-black border-r-2 dark:border-0'>
      <div className='p-3 flex-1 justify-center flex'>
        <div className='space-y-2'>
          {routes.map((route) => (
            <div
            onClick={() => onNavigate(route.href)}
            key={route.href}
            className={cn(
              `text-muted-foreground text-xs group flex p-3 w-full 
              justify-start font-medium cursor-pointer hover:text-primary 
              hover:bg-primary/10 rounded-lg transition`,
              pathname === route.href && 'bg-primary/10 text-primary'
              )}
              >
              <div className='flex flex-col gap-y-2 items-center flex-1'>
                <route.icon className='w-5 h-5' />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
