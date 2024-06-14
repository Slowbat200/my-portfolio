import { Navbar } from '@/components/navbar';
import Sidebar from '@/components/sidebar';

interface LandingLayoutProps {
  children: React.ReactNode;
  isPro: boolean;
}

const LandingLayout = async ({children, isPro}: LandingLayoutProps) => {
  return (
    <div className='h-full'>
      <Navbar isPro={isPro} />
      <div className='hidden md:flex mt-16 w-20 flex-col fixed inset-y-0'>
        <Sidebar />
      </div>
      <main className='md:pl-20 pt-16 h-full'>{children}</main>
    </div>
  );
};

export default LandingLayout;
