import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const HireMe = () => {
  return (
    <div>
      <h1 className='text-center text-5xl'>Why you should hire me?</h1>
      <p className='pt-3'>
        If you decide to hire me, I can prove you I&apos;m best and I can
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit deleniti accusamus magnam? Obcaecati delectus nemo
              aspernatur voluptas at cumque quidem, id, culpa velit nesciunt,
              libero eligendi. Quisquam, ipsum suscipit! Quibusdam.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>
              I&apos;ll never gonna let you down.
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              ex neque natus tempore dolorum ea cum assumenda atque libero!
              Atque debitis deleniti, explicabo quis magnam veritatis delectus
              iusto dolorem laborum.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>
              I&apos;ll never gonna run around and desert you.
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem animi saepe harum quisquam. Exercitationem officia
              ad inventore ipsam dolore fugit. Deleniti accusantium
              necessitatibus eius qui, in labore quae recusandae nobis!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>Never gonna make you cry.</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              officia libero voluptatibus, molestiae odio animi perspiciatis
              cumque. Nemo autem, unde magnam pariatur excepturi labore,
              incidunt voluptatibus sed dignissimos vitae optio.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionTrigger>Never gonna say goodbye.</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus temporibus sequi reiciendis eligendi blanditiis
              voluptatem? Dignissimos laborum quibusdam dolor et voluptatibus
              ipsam ab, amet esse non quos corrupti rerum repellendus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-6'>
            <AccordionTrigger>
              Never gonna tell a lie and hurt you.
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quisquam nostrum dicta minima quaerat, tempore distinctio et
              consectetur sed a laboriosam dolorum ipsa at nisi consequatur modi
              perferendis, dolores beatae!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default HireMe;
