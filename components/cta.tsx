import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Press_Start_2P } from "next/font/google";

const font = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})


const CTA = () => {
    return ( 
        <section className='cta'>
        <p className='cta-text'>
          Have a projects in your mind? <br className='sm:block hidden' /> Let's
          build it together
        </p>
        <Button className="btn hover:scale-110 transition">
        <Link href='/contact' className={cn(font.className)}>Contact me</Link>
        </Button>
      </section>
     );
}
 
export default CTA;