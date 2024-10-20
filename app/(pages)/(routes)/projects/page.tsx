import CTA from '@/components/cta';
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

const ProjectPage = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{' '}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Projects
        </span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-200'>
        I have built many websites since 2021, but the ones I am currently
        developing are some of my biggest websites. Whether it&apos;s this
        portfolio, a web music player, or a web tutorial for budding web
        developers.
      </div>

      <div className='flex  flex-wrap my-20 gap-16'>
        {projects.map((project) => (
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
            <CardContent>{project.description}</CardContent>
            <CardFooter className='mt-5 flex items-center gap-2 font-poppins'>
              {' '}
              <Link href={project.link} className='font-semibold text-blue-600'>
                Live link
              </Link>
              <Image
                src={arrow}
                alt='arrow'
                className='w-4 h-4 object-contain'
              />
            </CardFooter>
          </Card>
        ))}
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  );
};

export default ProjectPage;
