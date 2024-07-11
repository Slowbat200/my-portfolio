'use client'
import {features} from '@/constants'
import Link from 'next/link';
import {Highlight} from '@/components/ui/hero-highlight'
import {motion} from 'framer-motion'
import { fadeIn } from '@/utils/motion';

const Info = () => {
  return (
    <section className='pt-10'>
      <div className='relative xs:max-container px-8 mx-2 mt-5 pt-2'>
        <h1 className='dark:text-white text-black text-4xl md:text-5xl lg:text-6xl font-semibold text-center'>
          What I do?
        </h1>
        <p className="md:text-[22px] text-[17px] mt-5 text-justify tracking-tighter">
          {features.map((feature)=>(
            <span key={feature.id}>{feature.description}</span>
          ))}
          You can find more information about me in the <Link href='/about'><Highlight>About me</Highlight></Link> section .
        </p>
      </div>
    </section>
  );
};

export default Info;
