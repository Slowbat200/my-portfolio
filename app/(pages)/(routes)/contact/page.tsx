'use client';

import React, { useRef, useState } from 'react';

import { Press_Start_2P } from 'next/font/google';
import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';

import { useForm } from 'react-hook-form';

import emailjs from '@emailjs/browser';

import toast from 'react-hot-toast';

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { motion } from 'framer-motion';
import { Snowfall } from '@/components/ui/snow-fall';

const font = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
});

const ContactPage = () => {
  const Useform = useForm();
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
        {
          from_name: form.name,
          to_name: 'Slowbat',
          from_email: form.email,
          to_email: 'slowbat@seznam.cz',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )
      .then(() => {
        setIsLoading(false);
        setTimeout(() => {
          setForm({ name: '', email: '', message: '' });
        }, 3000);
        toast.success('Message sent successfully');
        router.refresh();
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error('Something went wrong');
        console.log(error);
      });
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-full'>
      <motion.div
        className='flex-1 min-w-[50%] flex flex-col '
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='dark:text-white text-[#1F2937] text-4xl md:text-5xl lg:text-6xl font-semibold md:pt-28'> {/** Text is white because of the snowfall */}
          Get <span className='spring_gradient_text drop-shadow'>in touch</span>
        </h1>
        <Form {...Useform}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='space-y-8 py-10 flex flex-col '
          >
            <FormField
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl {...field}>
                    <Input
                      placeholder='John Doe'
                      required
                      onChange={handleChange}
                      className='bg-white text-[#1F2937]'
                    />
                  </FormControl>
                  <FormDescription>What&apos;s your name?</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl {...field}>
                    <Input
                      placeholder='JohnDoe@mail.com'
                      required
                      value={form.email}
                      onChange={handleChange}
                      className='bg-white text-[#1F2937]'

                    />
                  </FormControl>
                  <FormDescription>What&apos;s your email?</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl {...field}>
                    <Textarea
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      required
                      name='message'
                      placeholder='Let me know how I can help you.'
                      className='bg-white text-[#1F2937]'

                    />
                  </FormControl>
                  <FormDescription>What&apos;s your message</FormDescription>
                </FormItem>
              )}
            />
            <button
              disabled={isLoading}
              type='submit'
              className={cn(
                'btn hover:scale-110 transition text-white py-2 px-4 md:w-fit rounded text-sm ',
                font.className
              )}
            >
              {isLoading ? 'Sending ...' : 'Send Message'}
            </button>
          </form>
        </Form>
      </motion.div>
    </section>
  );
};

export default ContactPage;
