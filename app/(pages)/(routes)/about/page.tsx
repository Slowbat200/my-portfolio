'use client';
import { skills } from '@/constants';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import AlternateTimeline from './components/timeline';
import { useEffect, useState } from 'react';

const AboutPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted) return null
  return (
    <section className='max-container'>
      <motion.h1
        className='text-center sm:text-5xl text-3xl font-semibold sm:leading-snug'
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        About me
      </motion.h1>
      <div className='mt-5 flex flex-col gap-3 dark:text-slate-300 text-slate-500'>
        <p className='text-justify tracking-tighter'>
          <Typewriter
            options={{
              strings: [
                `My name is Jakub Pavlovič, but you can call me Jacob or by my nickname
                Slowbat. I'm a 20 year-old web developer from the Czech Republic. As I
                mentioned, I specialize in web development. I have a passion for
                working with modern web technologies such as Next.js, TailwindCSS,
                PrismaDB, TypeScript, among others.`
              ],
              autoStart: true,
              loop: true,
              delay: 65
            }}
          />
        </p>
        <div className='py-10 flex flex-col'>
          <motion.h3
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className='font-semibold text-center sm:text-left sm:text-3xl text-xl relative font-poppins'
          >
            My Skills
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'tween', stiffness: 100 }}
            className='mt-16 justify-around sm:justify-normal flex flex-wrap gap-12'
          >
            {skills.map((skill) => (
              <div className='block-container w-20 h-20' key={skill.id}>
                <div className='btn-back rounded-xl shadow-[5px_0px_30px_#555] dark:shadow-[5px_0px_30px_#a1a]' />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className='btn-front rounded-xl cursor-pointer flex justify-center items-center'>
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
        <div>
          <AlternateTimeline />
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
