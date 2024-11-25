import {
  AIChatBot,
  ApexIntel,
  css,
  git,
  github,
  html,
  javascript,
  mongodb,
  nextjs,
  prisma,
  react,
  sass,
  shadcn,
  sql,
  tailwindcss,
  typescript,
  WaveWhisper,
  Wdt,
} from '@/public';

export const skills = [
  {
    id: 0,
    image: html,
    name: 'HTML',
    type: 'Frontend',
    description:
      `I've been working with HTML for 4 years now, and it's basically second nature to me. 
      I'm comfortable using it to create everything from simple web pages to more complex layouts for web apps. 
      I focus on writing clean, semantic code that's easy to work with and improves accessibility. 
      I've also used it alongside modern tools like CSS frameworks and JavaScript libraries, so it fits smoothly into any project. 
      Whether it's building a page from scratch or fine-tuning existing code, I know how to make HTML work for the project's needs.`,
  },
  {
    id: 1,
    image: css,
    name: 'CSS',
    type: 'Frontend',
    description: `I've been using CSS for 4 years, and it's been a huge part of my work in designing websites and applications.
    I know how to style anything from simple layouts to really complex, responsive designs.
    I'm comfortable with modern techniques like Flexbox, Grid or custom animations. 
    I've worked a lot with CSS frameworks and component libraries. Whether I'm customizing styles from scratch or tweaking a framework, 
    I focus on making things look clean, consistent, and user-friendly.`,
  },
  {
    id: 2,
    image: javascript,
    name: 'JavaScript',
    type: 'Frontend',
    description: `I've been working with JavaScript for 4 years, and it's my go-to for adding interactivity and functionality to websites and applications.
    I know how to use it to handle everything from dynamic updates and animations to more complex tasks like API integration and managing application logic. 
    I understand how libraries and frameworks are built on top of JavaScript, so I can work with them effectively while also writing clean, efficient vanilla JS when needed. \
    Whether it's front-end or back-end, I can make things work smoothly with JavaScript 
    `,
  },
  {
    id: 3,
    image: git,
    name: 'Git',
    type: 'Version Control',
    description: `
    I'm still getting the hang of Git, but I've used it for version control in some of my projects. 
    I know the basics, like cloning repos, committing changes, branching, and merging. 
    It's been great for collaborating with others and keeping track of my work. 
    While I'm not a pro yet, I'm actively learning more advanced features and getting better at using Git in team workflows.`,
  },
  {
    id: 4,
    image: github,
    name: 'GitHub',
    type: 'Version Control',
    description: `I use GitHub to manage my projects. 
    It's where I store my code, track changes, and review contributions. 
    I'm familiar with creating and managing repositories, pushing updates, and using features like pull requests. 
    It's a big part of how I keep my projects organized and work with teams effectively`,
  },
  {
    id: 5,
    image: mongodb,
    name: 'MongoDB',
    type: 'Database',
    description: `I understand how MongoDB works and its strengths, especially when it comes to handling large amounts of unstructured data. 
    While I haven't used it in a project yet, I'm familiar with how to set up collections, query documents, and manage data in a NoSQL database. 
    I'm definitely interested in using it more in future projects, especially for projects that require flexibility in data structure.`,
  },
  {
    id: 6,
    image: prisma,
    name: 'Prisma',
    type: 'Database',
    description: `I've got a solid understanding of how Prisma works, especially when it comes to database management with its ORM. 
    I'm familiar with its ability to simplify database queries and migrations. 
    I've explored its features for connecting to SQL databases and handling data models, and I'm looking forward to incorporating it into future projects for cleaner, more efficient database management.`,
  },
  {
    id: 7,
    image: sql,
    name: 'SQL',
    type: 'Database',
    description: `I've been working with SQL for 4 years, mainly through school projects, and I'm pretty comfortable with it. 
    I know how to write complex queries, manage databases, and optimize performance. 
    I'm familiar with things like joins, indexing, and normalization. 
    While I'm not a full-blown expert, I have a solid understanding and feel confident using SQL in a wide range of situations.
    `,
  },
  {
    id: 8,
    image: shadcn,
    name: 'Shadcn-UI',
    type: 'Frontend',
    description: `I use Shadcn/UI in almost every modern project I work on. 
    It's my go-to component library because it's flexible, highly customizable, and fits perfectly with my design needs.
     I'm really comfortable working with its pre-built components, and I often tweak them to match the look and feel of the projects I'm building. 
     It saves me time while ensuring that the UI is clean, consistent, and responsive across different devices.`,
  },
  {
    id: 10,
    image: react,
    name: 'React',
    type: 'Frontend',
    description: `I've been working with React for 3 years, and it's been a key part of almost every front-end project I've built.
     I'm comfortable with its core concepts like hooks, state management, and component-based architecture. 
     Lately, I've been using Next.js for most of my projects, which takes React to the next level with server-side rendering, routing, and better performance optimization. 
     Even though I'm diving deep into Next.js, React remains my foundation for building dynamic, scalable UIs.`,
  },

  {
    id: 12,
    image: sass,
    name: 'Scss',
    type: 'Frontend',
    description: `I've worked with SCSS for a few years, so I'm comfortable using its features like variables, nesting, and mixins to write more efficient and maintainable styles. While I'm not using it much right now since I mostly stick to CSS or utility-first frameworks, I still know how to organize styles with SCSS and appreciate its power when working on larger, more complex projects`,
  },
  {
    id: 13,
    image: nextjs,
    name: 'Next.js',
    type: 'Frontend',
    description: `I've been working with Next.js for a while, and it's become my go-to framework for building bigger projects.
    While I'm not a full expert yet, I'm really comfortable with its features like server-side rendering, API routes, and dynamic routing. 
    I've used it to improve performance and SEO in my projects, and I'm always learning new things about it. 
    Next.js is a great tool for creating scalable and optimized web apps, and I'm excited to keep using it in future projects.`,
  },
  {
    id: 14,
    image: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
    description: `I've been using TailwindCSS for about 3 and a half years, and it's hands down my favorite CSS framework. 
    It makes styling so much faster and more flexible with its utility-first approach. 
    I love how easy it is to create responsive, custom designs without having to write a lot of custom CSS. 
    It's become a staple in almost every project I build, helping me stay efficient and maintain clean, organized code.`,
  },
  {
    id: 15,
    image: typescript,
    name: 'TypeScript',
    type: 'Backend',
    description: `I've been using TypeScript for a while, mainly with Next.js for both front-end and back-end development. 
    I'm not a pro yet, but I'm comfortable with its features like static typing, interfaces, and generics, which really help improve code quality and catch errors early. 
    I use TypeScript to write more maintainable and scalable code, and while I'm still learning some advanced patterns, it's already a huge part of how I build applications.`,
  },
];

export const projects = [
  {
    id: 0,
    theme: 'btn-back-red',
    icon: Wdt,
    name: 'Web development tutorial',
    description: `Developed a web application that helps begginer developers with web developing. 
    This is the latest version of the website and it contains modern technolodies such as Next.js, TailwindCSS, Typescript and Convex Database. 
    For components I'm using shadcn/ui and Aceternity UI. For icons I'm using react-icons and material icons from Material UI`,
    link: 'https://webdevcourse.vercel.app',
  },
  {
    id: 1,
    theme: 'btn-back-green',
    icon: WaveWhisper,
    name: 'WaveWhisper',
    description:
      'WaveWhisper is a full-stack music player application designed to provide users with a modern and feature-rich platform to listen to their favorite music. The application is built using Next.js for server-side rendering, Tailwind CSS for styling, TypeScript for type safety, and Supabase for database management, ensuring a seamless and engaging user experience. ',
    link: 'https://github.com/Slowbat200/waveWhisper',
  },
  {
    id: 2,
    theme: 'btn-back-yellow',
    icon: AIChatBot,
    name: 'AI Chat Bot',
    description: `App where you can create your own character, give him/her 'personality' and communicate with each other`,
    link: 'https://github.com/Slowbat200/ai-companion',
  },
  {
    id: 3,
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
