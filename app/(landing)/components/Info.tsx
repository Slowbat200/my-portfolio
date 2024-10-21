'use client';
import { features } from '@/constants';
import Link from 'next/link';
import { Highlight } from '@/components/ui/hero-highlight';
import { useState } from 'react';
import { FireLoader } from '@/components/loader'; // Add this import

const Info = () => {
  const [loading, setLoading] = useState(false);

  const handleInfoLoader = () => {
    setLoading(true); // Set loading state when link is clicked
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
    }, 2000);
  };
  return (
    <section className='pt-10'>
      {loading && ( // Add FireLoader conditionally
        <div className='fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-[9999]'>
          <FireLoader loading={loading} size={50} />
        </div>
      )}
      <div className='relative xs:max-container px-8 mx-2 my-14 md:pt-10'>
        <h1 className='dark:text-white text-black text-4xl md:text-5xl lg:text-6xl font-semibold text-center'>
          What I do?
        </h1>
        <p className='md:text-[22px] text-[17px] mt-5 text-justify tracking-tighter'>
          {features.map((feature) => (
            <span key={feature.id}>{feature.description}</span>
          ))}
          You can find more information about me in the{' '}
          <Link href='/about' onClick={handleInfoLoader}>
            <Highlight className='z-50'>About me</Highlight>
          </Link>{' '}
          section .
        </p>
      </div>
    </section>
  );
};

export default Info;
