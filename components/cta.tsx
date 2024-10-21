'use client'

import React, { useState } from "react";

import Link from "next/link";

import { Button } from "./ui/button";

import { FireLoader } from "./loader";

import { cn } from "@/lib/utils";

import { Press_Start_2P } from "next/font/google";


const font = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

export const CTA = () => {
  const [loading, setLoading] = useState(false)

  const handleCtaLoader = () => {
    setLoading(true)
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = ''
    }, 2000)
  } 
  return ( 
        <section className='cta'>
          {loading &&(
            <div className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-[9999]">
              <FireLoader loading={loading} size={50} />
            </div>
          )}
        <p className='cta-text'>
          Have a projects in your mind? <br className='sm:block hidden' /> Let&apos;s
          build it together
        </p>
        <Button className="btn hover:scale-110 transition ">
        <Link onClick={handleCtaLoader} href='/contact' className={cn(font.className)}>Contact me</Link>
        </Button>
      </section>
     );
}
 