'use client'
import { useTranslations } from "next-intl"
import React from 'react';
import { Download } from 'lucide-react'
import Link from 'next/link'
import TextTransition, { presets } from 'react-text-transition';
import HeroGlobe from './heroGlobe';
import { Swipe } from "swipe-animate";

// const arrayOfWords: string[]  = ['Safety', 'Productivity', 'Training'];
const arrayOfWords: string[] = [
  'safety',
  'productivity',
  'training',
];
const Hero = () => {
 
  const t = useTranslations('Hero')
   return (
    <section className='max-w-full' >
        <video
        autoPlay
        loop
        muted
        className="hidden xl:flex z-10 xl:min-h-[auto] relative mx-auto"
       
      >
        <source src="/globe-animate.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className="sm:flex w-[100%] xl:hidden z-10 w-f min-w-full pt-[100px] max-w-none absolute "
      >
        <source src="/Globe-Mobile.mp4" type="video/mp4" />
      </video>
  
      <div className='container mx-auto xl:top-0  xl:h-[500px]  xl:mt-[-600px] relative top-[350px] h-[650px] md:top-[600px] md:h-[800px] '>
        <div className='flex flex-col items-center justify-between gap-10 xl:flex-row   '>
          {/* text */}
          <div className='text-center xl:text-left z-20 '>
            <span className='text-[30px] font-medium leading-[2rem] relative top-[-18px]'>{t('enhancing')}</span><br />
            <span className='text-[30px] font-medium leading-[2rem]'>{t('construction')}</span><br />
            <div className="text-yellow text-[40px] uppercase font-bold  xl:flex xl:justify-start flex justify-center">
           
			{" "}
			<Swipe
				words={arrayOfWords.map((key) => t(key))}
				intervalDuration={3000}
				
			
			/>
		          </div>
            <span className='text-[30px] font-medium '>{t('nextgen')}</span><br />
            <div className='py-6 xl:text-left text-center xl:w-1/2'>
              <p>
              {t('herodesc')}
              </p>
            </div>
            <div className='justify-center xl:flex-row xl:space-8 mt-4 flex flex-col items-center xl:justify-start'>
              <div className='flex gap-x-2'>
                <Link href='/' className='flex items-center space-x-2 rounded-full text-yellow  uppercase border-2 border-yellow px-8 py-2 transition-all hover:bg-yellow/80  hover:font-bold  hover:text-blue'>Sign Up</Link>
              </div>
            </div>
          </div>

          {/* image */}
          {/* <HeroGlobe /> */}
        </div>
      </div>
    </section>
  )
}

export default Hero