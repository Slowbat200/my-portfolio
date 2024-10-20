import { MobileNavbar } from '@/components/mobile-navbar';
import { Navbar } from '@/components/navbar';

const LandingLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <div className='hidden md:flex'>
        <Navbar />
      </div>
      <div className='flex md:hidden'>
        <MobileNavbar />
      </div>
      <main className=' h-full'>{children}</main>
    </div>
  );
};

export default LandingLayout;
