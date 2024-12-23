'use client';

import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { motion } from 'framer-motion';

export default function AlternateTimeline() {
  const data = [
    {
      title: '2024',
      content: (
        <div>
          <p className='text-neutral-200 dark:text-neutral-200 text-xs lg:text-[17px] leading-6 font-normal mb-8'> {/** Text is white because of the snowfall */}
            Currently working on my biggest project of all time. Its gonna be a
            website with courses about Web Development, which includes basic web
            languages and their libraries and frameworks. I&apos;d like to make
            the courses more fun than they are on other platforms. Which means
            there will be more practice than theory, there will be quizzes and a
            lot of other fun content.
          </p>
        </div>
      ),
    },
    {
      title: 'Late 2023',
      content: (
        <div>
          <p className='text-neutral-200 dark:text-neutral-200 text-xs lg:text-[17px] leading-6 font-normal mb-8'> {/** Text is white because of the snowfall */}
            After I end up in the school I started learning by my own and
            started exploring, for me, new technologies. I began learning,
            modern technologies such as React, Next.js, TailwindCSS or MongoDB.
          </p>
        </div>
      ),
    },
    {
      title: 'Late 2022 and Early 2023',
      content: (
        <div>
          <p className='text-neutral-200 dark:text-neutral-200 text-xs lg:text-[17px] leading-6 font-normal'> {/** Text is white because of the snowfall */}
            In summer 2022 I started working on my graduation project. It was
            first version of Web Development courses. It was developed only with
            HTML, CSS and JavaScript.
          </p>
          <p className='text-neutral-200 dark:text-neutral-200 text-xs lg:text-[17px] leading-6 font-normal mb-8'> {/** Text is white because of the snowfall */}
            After graduation I realized it needed a change, then many versions
            of this project came out.
          </p>
        </div>
      ),
    },
    {
      title: 'Late 2021',
      content: (
        <div>
          <p className='text-neutral-200 dark:text-neutral-200 text-xs lg:text-[17px] leading-6 font-normal mb-8'> {/** Text is white because of the snowfall */}
            This was the year I first started learning about web development,
            this is where my journey as a web developer began. Since then I have
            created many projects and learned many new things that I still use
            today
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className='w-full'>
      <Timeline data={data.map((item) => ({
        ...item,
        content: (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {item.content}
          </motion.div>
        ),
      }))} />
    </div>
  );
}
