'use client'

import React from "react"
import Image from "next/image"
import { motion } from 'framer-motion'

const HeroGlobe = () => {
  return (
    <div className='relative items-center justify-center'>
            <motion.div
            initial={{ opacity:0 }}
            animate={{
                opacity: 1,
                transition: { delay:0.1, duration:0.4, ease: 'easeIn'}
            }}
          
            >
               
            </motion.div>
        </div>
   
  )
}

export default HeroGlobe