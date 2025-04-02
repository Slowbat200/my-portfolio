import BackgroundPlayer from '@/components/audio-player';
import { MobileNavbar } from '@/components/mobile-navbar';
import { Navbar } from '@/components/navbar';

const PagesLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className='hidden md:flex'>
        {' '}
        <Navbar />
      </div>
      <div className='flex md:hidden'>
        {' '}
        <MobileNavbar />
      </div>
      <main className='h-full bg-[#FFF7ED] dark:bg-[#2D3748]'>
        {children}
        <div>
          <BackgroundPlayer />
        </div>
      </main>
    </div>
  );
};

export default PagesLayout;
