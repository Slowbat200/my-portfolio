'use client';
import { features } from '@/constants';
import Link from 'next/link';
import { Highlight } from '@/components/ui/hero-highlight';
import { useState } from 'react';
import { FireLoader } from '@/components/loader'; // Add this import
import { motion } from 'framer-motion'; // Add this import

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
        <motion.h1 
          className='dark:text-white text-[#1F2937] text-4xl md:text-5xl lg:text-6xl font-semibold text-center'
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        > {/** Text is gray because of the winter */}
          What I do?
        </motion.h1>
        <motion.p 
          className='md:text-[22px] text-[17px] mt-5 text-justify tracking-tighter text-[#1F2937] dark:text-white'
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          {features.map((feature) => (
            <span key={feature.id}>{feature.description}</span>
          ))}
          You can find more information about me in the{' '}
          <Link href='/about' onClick={handleInfoLoader}>
            <Highlight className='z-40'>About me</Highlight>
          </Link>{' '}
          section .
        </motion.p>
      </div>
    </section>
  );
};

export default Info;
