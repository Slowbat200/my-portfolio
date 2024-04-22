import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  shadcn,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  supabase,
  sql,
  WaveWhisper,
  Wdt,
  ApexIntel,
  AIChatBot,
} from '@/public';

export const skills = [
  {
    image: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    image: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    image: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    image: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    image: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    image: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    image: supabase,
    name: 'Supabase',
    type: 'Database',
  },
  {
    image: sql,
    name: 'SQL',
    type: 'Database',
  },
  {
    image: shadcn,
    name: 'Shadcn-UI',
    type: 'Frontend',
  },
  {
    image: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    image: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    image: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    image: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    image: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    image: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    image: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/Slowbat200',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  },
];

export const projects = [
  {
    theme: 'btn-back-red',
    icon: Wdt,
    name: 'Web development tutorial',
    description: `Developed a web application that helps begginer developers with web developing. This is just an older version of the site. I'm currently working on the latest version which will include newer technology, a nicer design and much more.`,
    link: 'https://github.com/Slowbat200/Frontend-tutorial',
  },
  {
    theme: 'btn-back-green',
    icon: WaveWhisper,
    name: 'Full Stack WaveWhisper',
    description:
      'Created a full-stack music player aplication "WaveWhisper," enabling users to listen their favourite music with modern design and features.',
    link: 'https://github.com/Slowbat200/waveWhisper',
  },
  {
    theme: 'btn-back-yellow',
    icon: AIChatBot,
    name: 'AI Chat Bot',
    description:
      'App where you can create your own character, give him/her properties and and communicate with each other',
    link: 'https://github.com/Slowbat200/ai-companion',
  },
  {
    theme: 'btn-back-orange',
    icon: ApexIntel,
    name: 'AI Sass library',
    description:
      'App where you can chatting, generating videos, images, music or generate codes, with functional premium and chat support.',
    link: 'https://github.com/Slowbat200/ApexIntel',
  },
];

export const features = [
  {
    id: '0',
    name: 'Feature 1',
    description: `Welcome to my world of web development, where creativity meets cutting-edge technologies! 
    I am a passionate full-stack web developer with a love for crafting dynamic and responsive websites that not only meet but exceed modern expectations. 
    My toolkit includes a curated selection of the latest and greatest technologies, ensuring that every project I undertake is a showcase of innovation and efficiency.
    In my journey as a web developer, I specialize in utilizing powerful tools such as Next.js, React, Typescript, TailwindCSS, Supabase, and Prisma DB. 
    These technologies form the backbone of my development process, allowing me to create seamless, user-friendly, and visually great web applications.
    `,
  },
];
