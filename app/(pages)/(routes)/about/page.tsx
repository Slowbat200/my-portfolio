'use client';
import { Button } from '@/components/ui/button';

import AlternateTimeline from './components/timeline';

import { skills } from '@/constants';

import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import { useEffect, useState } from 'react';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FireLoader } from '@/components/loader';

// Define the interface for the skill
interface Skill {
  id: number;
  image: string; // Adjust the type based on your image import
  name: string;
  type: string;
  description: string;
}

interface ModalProps {
  skill: Skill | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const Modal = ({ skill, onClose, onNext, onPrevious }: ModalProps) => {
  if (!skill) return null;

  return (
    <motion.div
      className='dark:bg-[#1E293B] bg-[#F0FDFA] text-[#065F46] dark:text-[#A7F3D0] fixed inset-0 flex justify-center items-center z-50'
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className='flex flex-col justify-center items-center gap-y-5 border px-5 py-5 w-[57.3em] h-fit rounded-lg bg-neutral-200 text-black'
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <span
          className='text-3xl cursor-pointer absolute top-5 right-5 text-[#92400e]'
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
          {skill.name}
        </h2>
        <AnimatePresence>
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className='flex flex-col-reverse md:flex-row-reverse gap-x-10 justify-center items-center'
          >
            <p>{skill.description}</p>
            <div className='md:w-px md:h-40 h-px w-40 bg-black md:mx-4 my-4' />{' '}
            {/* Vertical separator */}
            <Image
              src={skill.image}
              alt={skill.name}
              className='w-40 h-40 object-contain'
            />
          </motion.div>
        </AnimatePresence>

        <div className='flex justify-between w-full mt-4'>
          <Button variant='ghost' onClick={onPrevious}>
            <ArrowLeft size={20} className='mr-2' /> Previous
          </Button>
          <Button variant='ghost' onClick={onNext}>
            Next <ArrowRight size={20} className='ml-2' />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const [loading, setLoading] = useState(true);

  // Simulate loading for demonstration
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Remove this in production
  }, []);

  // Hide overflow when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openModal = (skill: any) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setSelectedSkill(null);
    setIsModalOpen(false);
  };
  const skillsLength = skills.length; // Get the total number of skills

  const onNext = () => {
    if (selectedSkill) {
      const currentIndex = skills.findIndex(
        (skill) => skill.id === selectedSkill.id
      );
      const nextIndex = (currentIndex + 1) % skills.length; // Loop back to the first skill
      setSelectedSkill(skills[nextIndex]);
    }
  };

  const onPrevious = () => {
    if (selectedSkill) {
      const currentIndex = skills.findIndex(
        (skill) => skill.id === selectedSkill.id
      );
      const previousIndex = (currentIndex - 1 + skillsLength) % skills.length; // Loop back to the last skill
      setSelectedSkill(skills[previousIndex]);
    }
  };

  if (!isMounted) return null;
  return (
    <section className='max-container relative h-full'>
      {loading && (
        <div className='fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-[9999]'>
          <FireLoader loading={loading} size={50} />
        </div>
      )}
      <motion.h1
        className='text-center sm:text-5xl text-3xl sm:leading-snug md:pt-28'
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <span className='spring_gradient_text font-semibold drop-shadow'>
          About me
        </span>{' '}
      </motion.h1>
      <div className='mt-5 flex flex-col gap-3'>
        <span className='md:text-[20px] text-[17px] mt-5 text-justify tracking-tighter dark:text-white text-[#1C1B29] z-40'>
          {' '}
          {/** Text is white because of the snowfall */}
          <Typewriter
            options={{
              strings: [
                `My name is Jakub Pavlovič, but you can call me Jacob or by my nickname
                Slowbat. I'm a 20 year-old web developer from the Czech Republic. As I
                mentioned, I specialize in web development. I have a passion for
                working with modern web technologies such as Next.js, TailwindCSS,
                PrismaDB, TypeScript, among others.`,
              ],
              autoStart: true,
              loop: true,
              delay: 65,
            }}
          />
        </span>

        <div className='py-10 flex flex-col'>
          <motion.h3
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className='font-semibold text-center sm:text-left sm:text-3xl text-xl relative font-poppins dark:text-white text-[#1C1B29]'
          >
            My Skills
          </motion.h3>{' '}
          {/** Text is white because of the snowfall */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='mt-16 justify-around sm:justify-normal flex flex-wrap gap-12'
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            whileInView='visible'
            viewport={{ once: false }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className='block-container w-20 h-20'
              >
                <div className='btn-back rounded-xl shadow-[5px_0px_30px_#4A5568] dark:shadow-[5px_0px_30px_#A7F3D0]' />
                <motion.div
                  initial={{ opacity: 1 }}
                  onClick={() => openModal(skill)}
                >
                  <div className='btn-front rounded-xl cursor-pointer flex justify-center items-center dark:bg-[#ffffff20] bg-[#00000020]'>
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          {isModalOpen && (
            <Modal
              skill={selectedSkill}
              onClose={onCloseModal}
              onNext={onNext}
              onPrevious={onPrevious}
            />
          )}
        </div>

        <div className='z-40'>
          <AlternateTimeline />
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
