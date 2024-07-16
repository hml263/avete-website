'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import FadeIn from "@/lib/variants"
import { Send } from 'lucide-react'
import React from 'react'



const Contact = () => {
  return (
    <section id='contact' className="z-30 translate-y-1 bg-primary">
   

    <div className='px6 container flex flex-col justify-between py-12 text-lg md:flex-row'>
        <motion.div
          variants={FadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className='mb-12 mr-6 flex items-center  py-6'
        >
          <h1 className='text-[40px] font-bold uppercase leading-[3rem]'>
          <span className='under-line'>  Get in Touch</span><br/>
          <span className="text-[14px] font-medium capitalize">Let us know what you're looking for, and we'll be happy to assist you. </span>
          <Image
              src='/Contact-Us.jpg' height={400} width={400} alt='mission' className="rounded-md mt-12"
              /> 
          </h1>
         
         
        
       
              
        </motion.div>
        
        <motion.form
          variants={FadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className='flex max-w-3xl flex-1 flex-col items-start gap-y-4 rounded-md bg-secondary/80 p-10'
        >
          <input
            type='text'
            placeholder='Your Name'
            required
            className='w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
          />
           <input
            type='text'
            placeholder='Company Name'
            required
            className='w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
          />
          <input
            type='email'
            placeholder='Email '
            required
            className='w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
          />
           <input
            type='number'
            placeholder='Phone Number '
            required
            className='w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
          />
          <textarea
            name='message'
            id='message'
            placeholder="Query"
            className='mb-12 w-full resize-none border-b border-white/25 bg-transparent py-12 outline-none transition-all placeholder:text-white/50 focus:border-blue/25'
          ></textarea> 
          <button className='w-50 mt-12 flex items-center justify-between gap-x-2 rounded-full text-black bg-yellow px-4 py-3 transition-all duration-300 hover:bg-lighted hover:text-secondary hover:transition-all'>
            <p className='text-md capitalize'> Send </p>
            <Send className='h-5 w-5' />
          </button>
        </motion.form>
      </div>
</section>

  )
}

export default Contact