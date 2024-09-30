'use client';

import React from 'react';
import { Timeline } from '@/components/ui/timeline';

export default function AlternateTimeline() {
  const data = [
    {
      title: '2024',
      content: (
        <div>
          <p className='text-neutral-800 dark:text-neutral-200 text-xs lg:text-[17px] leading-6 font-normal mb-8'>
            Currently working on my biggest project of all time. Its gonna be a
            websit with courses about Web Development, which includes basic web
            languages and their libraries and frameworks. I'd like to make the
            courses more fun than they are on other platforms. Which means there
            will be more practice than theory, there will be quizzes and a lot
            of other fun content.
          </p>
        </div>
      ),
    },
    {
      title: 'Late 2023',
      content: (
        <div>
          <p className='text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8'>
            After I end up in the school I started learning by my own and
            started exploring, for me, new technologies. I began learning,
            modern technologies such as React.js, TailwindCSS or MongoDB.
          </p>
          <p className='text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8'></p>
        </div>
      ),
    },
    {
      title: 'Late 2022 and Early 2023',
      content: (
        <div>
          <p className='text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8'>
            In summer 2022 I started working on my graduation project. It was
            first version of Web Development courses. It was developed only with
            HTML, CSS and JavaScript.
          </p>
          <p className='text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8'>
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
          <p className='text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8'>
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
      <Timeline data={data} />
    </div>
  );
}
