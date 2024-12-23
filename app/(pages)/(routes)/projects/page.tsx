'use client';

import { CTA } from '@/components/cta';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import { projects } from '@/constants';
import { arrow } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';
import { Snowfall } from '@/components/ui/snow-fall';
const ProjectPage = () => {
  const router = useRouter();

  return (
    <section className='max-container'>
      <Snowfall />
      <motion.h1
        className='head-text'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className='christmas-gradient_text font-semibold drop-shadow'>
          My Projects
        </span>
      </motion.h1>
      <motion.div
        className='mt-5 flex flex-col gap-3'
        variants={staggerContainer(0.1, 0.2)} // Added animation variant
        initial='hidden' // Set initial state
        whileInView='show' // Set state when in view
      >
        <p className='dark:text-slate-200 text-neutral-200 z-40'>
          I have built many websites since 2021, but the ones I am currently
          developing are some of my biggest websites. Whether it&apos;s this
          portfolio, a web music player, or a web tutorial for budding web
          developers. Here you can see all my projects that I haven&apos;t
          mentioned here.
          <Button
            className='ml-5 bg-gradient-to-r from-[#DA1212] to-[#F08C00]'
            onClick={() => router.push('https://github.com/Slowbat200')}
          >
            Learn more
          </Button>
        </p>
      </motion.div>

      <motion.div
        className='flex  flex-wrap my-20 gap-16'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {projects.map((project) => (
          <motion.div
           className='z-40'
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className='lg:w-[400px] w-full h-full' key={project.id}>
              <CardHeader className={`btn-back rounded-xl ${project.theme}`}>
                <div className='block-container w-12 h-12'>
                  <CardTitle className='btn-front rounded-xl flex justify-center items-center'>
                    <Image
                      src={project.icon}
                      alt='Project Icon'
                      className='w-8 h-8 object-contain rounded'
                    />
                  </CardTitle>
                </div>
                <CardDescription>{project.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-white z-50'>{project.description}</p>
              </CardContent>
              <CardFooter className='mt-5 flex items-center gap-2 font-poppins'>
                {' '}
                <Link
                  href={project.link}
                  className='font-semibold text-white z-50'
                >
                  Live link
                </Link>
                <Image
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain z-50'
                />
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  );
};

export default ProjectPage;
