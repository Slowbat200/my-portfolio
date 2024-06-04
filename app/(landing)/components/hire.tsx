import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const HireMe = () => {
  return (
    <div>
      <h1 className='text-center text-5xl'>Why you should hire me?</h1>
      <p className="pt-3">
        If you decide to hire me, I can prove you I'm best and I can provide you
        with all my skills and knowledge that I have learned in the time I have
        been developing websites.
      </p>
      <h2 className="text-center text-3xl pt-8">Can you trust me?</h2>
      <p>Ofcourse you can because I follow a couple of principles, namely: </p>
      <div className="pt-8 leading-8 flex justify-center items-center">
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>I'll never gonna give you up.</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>I'll never gonna let you down.</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>I'll never gonna run around and desert you.</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Never gonna make you cry.</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Never gonna say goodbye.</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Never gonna tell a lie and hurt you.</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
    </div>
  );
};

export default HireMe;
