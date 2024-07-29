'use client'

import React from "react"
import Image from "next/image"
import { motion } from 'framer-motion'

const HeroGlobe = () => {
  return (
    <div className='relative items-center justify-center'>
      

<video
        autoPlay
        loop
        muted
        className=" z-10 w-[100%] xl:w-[700px] min-w-full min-h-full max-w-none "
      >
        <source src="/Main.mp4" type="video/mp4" />
      </video>

           {/* <Image
              src='/globe.gif' height={80} width={280} alt='globe'
               className="]" style={{ left: '',}} />   */}
        </div>
   
  )
}

export default HeroGlobe