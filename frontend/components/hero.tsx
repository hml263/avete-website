'use client'
import { useTranslations } from "next-intl"
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
  const t = useTranslations('Hero')
   return (
    <section className='w-f lg:pt-20 pt-40 '  style={{
      // backgroundImage: `url('/global-bg.png')`,
      //  height: '750px',
      //  backgroundRepeat: 'no-repeat',
      //  backgroundSize: 'cover'
      }}>
      <div className='container mx-auto h-full '>
        <div className='flex flex-col items-center justify-between gap-10 xl:flex-row xl:pt-32 xl:py-[100px] pb-[150px]'>
          {/* text */}
          <div className='text-center xl:text-left'>
            <span className='text-[30px] font-medium leading-[2rem]'>{t('enchancing')}</span><br />
            <span className='text-[30px] font-medium leading-[2rem]'>{t('construction')}</span><br />
            <h1 className="text-yellow text-[40px] uppercase font-bold  xl:flex xl:justify-start flex justify-center ">
              <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
            </h1>
            <span className='text-[30px] font-medium '>Next Gen AI</span><br />
            <div className='py-6 lg:w-2/4 xl:text-left text-center'>
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
          {/* <HeroGlobe /> */}
        </div>
      </div>
    </section>
  )
}

export default Hero