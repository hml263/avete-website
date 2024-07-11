'use client'

import Image from 'next/image'
import { Link, animateScroll as scroll } from 'react-scroll'
import React from 'react'


const Footer = () => {
  return (
    <section className='bg-secondary py-8'>
      <div className='container flex flex-col items-center justify-center'>
        <p className='text-sm font-semibold capatalize text-center'>
         
          <span>® 2024</span> Avete Pvt Ltd. All Right Reserved.
        </p>
      
    
      </div>
    </section>
  )
}

export default Footer