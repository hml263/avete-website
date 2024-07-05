'use client'

import React from 'react';
import { Download } from 'lucide-react'
import Link from 'next/link'
import TextTransition, { presets } from 'react-text-transition';
import HeroGlobe from './heroGlobe';

const TEXTS = ['Safety', 'Productivity', 'Training'];
const Hero = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <section className='w-f pt-40'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col items-center justify-between gap-10 xl:flex-row xl:pt-8'>
          {/* text */}
          <div className='text-center xl:text-left'>
            <span className='text-[20px] font-medium leading-[2rem]'>Enhancing</span><br />
            <span className='text-[20px] font-medium leading-[2rem]'>Construction</span><br />
            <h1 className="text-yellow text-[30px] uppercase font-bold">
              <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
            </h1>
            <span className='text-[20px] font-medium '>Next Gen AI</span><br />
            <div className='py-6 xl:w-1/2'>
              <p>
                Revolutionize construction sites with our AI
                powered solution. Our innovative tools seamlessly
                integrate into your workflow, ensuring a safer and
                more efficient work environment.
              </p>
            </div>
            <div className='justify-center xl:flex-row xl:space-8 mt-4 flex flex-col items-center xl:justify-start'>
              <div className='flex gap-x-2'>
                <Link href='/' className='flex items-center space-x-2 rounded-full text-yellow  uppercase border-2 border-yellow px-8 py-2 transition-all hover:bg-yellow/80  hover:font-bold  hover:text-blue'>Sign Up</Link>
              </div>
            </div>
          </div>

          {/* image */}
          <HeroGlobe />
        </div>
      </div>
    </section>
  )
}

export default Hero