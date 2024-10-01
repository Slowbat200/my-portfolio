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
  react,
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
    id: 0,
    image: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    id: 1,
    image: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    id: 2,
    image: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    id: 3,
    image: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    id: 4,
    image: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    id: 5,
    image: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    id: 6,
    image: supabase,
    name: 'Supabase',
    type: 'Database',
  },
  {
    id: 7,
    image: sql,
    name: 'SQL',
    type: 'Database',
  },
  {
    id: 8,
    image: shadcn,
    name: 'Shadcn-UI',
    type: 'Frontend',
  },
  {
    id: 10,
    image: react,
    name: 'React',
    type: 'Frontend',
  },

  {
    id: 12,
    image: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    id: 13,
    image: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    id: 14,
    image: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    id: 15,
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
    link: 'https://www.linkedin.com/in/jakub-pavlovic-33b765285/',
  },
];

export const projects = [
  {
    theme: 'btn-back-red',
    icon: Wdt,
    name: 'Web development tutorial',
    description: `Developed a web application that helps begginer developers with web developing. 
    This is the latest version of the website and it contains modern technolodies such as Next.js, TailwindCSS, Typescript and Convex Database. 
    For components I'm using shadcn/ui and Aceternity UI. For icons I'm using react-icons and material icons from Material UI`,
    link: 'https://webdevcourse.vercel.app',
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
      `App where you can create your own character, give him/her 'personality' and communicate with each other`,
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
