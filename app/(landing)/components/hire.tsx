import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const HireMe = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-center text-5xl'>Why you should hire me?</h1>
      <p className='pt-3'>
        If you decide to hire me, I&apos;ll prove you that I&apos;m best and I will
        provide you with all my skills and knowledge that I have learned in the
        time I have been developing websites.
      </p>
      <h2 className='text-center text-3xl pt-8'>Can you trust me?</h2>
      <p>Ofcourse you can because I follow a couple of principles, namely: </p>
      <div className='pt-8 leading-8 flex justify-center items-center'>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              I&apos;ll never gonna give you up.
            </AccordionTrigger>
            <AccordionContent>
              It means I&apos;ll never give up on you or the job until
              everything is done.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>
              I&apos;ll never gonna let you down.
            </AccordionTrigger>
            <AccordionContent>
              It means I&apos;ll do my job to the best of my ability so you
              won&apos;t be disappointed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>
              I&apos;ll never gonna run around and desert you.
            </AccordionTrigger>
            <AccordionContent>
              What I mean by that is that if you hire me to do the business, I
              won&apos;t just leave you and move on to a competitor. I&apos;m
              loyal to my job, and as long as I&apos;m needed, I won&apos;t run
              to anyone else.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>Never gonna make you cry.</AccordionTrigger>
            <AccordionContent>
              I&apos;m a calm person who can make fun of anything, even myself.
              That&apos;s why even if the atmosphere in the workplace is rough,
              I&apos;ll be the one trying to calm it down.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionTrigger>Never gonna say goodbye.</AccordionTrigger>
            <AccordionContent>
              I&apos;ll never say goodbye until my job is done.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-6'>
            <AccordionTrigger>
              Never gonna tell a lie and hurt you.
            </AccordionTrigger>
            <AccordionContent>
              I will be 100% honest with you and I will always tell the truth.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default HireMe;
