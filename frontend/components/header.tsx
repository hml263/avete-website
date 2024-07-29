'use client'
import { useTranslations } from 'next-intl'
import { animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'
import Nav from './nav'
import MobileNav from './mobileNav'
import LanguageSwitcher from './languageSwitcher'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [header, setHeader] = useState(false);

    const scrollHeader = () =>{
        if(window.scrollY >= 20){
            setHeader(true)
        }else {
            setHeader(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll' ,scrollHeader)
        return ()=>{
            window.addEventListener('scroll', scrollHeader)
        }
    },[])

  return (
    <header className={header ? "fixed z-40 w-full bg-primary" : "fixed z-40 w-full bg-transparent "} >
        <div className="container mx-auto flex items-center justify-between">
            {/* logo */}
            <Link href='/'  
            className='cursor-pointer z-0'>
                <Image src='/avete-logo.png' width={120} height={120} alt='logo' />
            </Link>


            {/* desktop nav */}
            <div className="hidden items-center gap-x-8 xl:flex ">
                <Nav />
                <Link href='/' 
                className=" opacity-1 text-md rounded-full bg-yellow px-6 py-2 text-medium text-blue font-bold transition-all hover:text-primary cursor-pointer"> 
                    Sign Up
                </Link>
            
               <Link href="/en">EN |</Link> 
               <Link href="/jp" className='ml-[-28px]'>JP</Link> 
             
            </div>
            {/* mobile nav */}
            <div className="z-50 xl:hidden">
                <MobileNav />
              
            </div>
            
        </div>

        
    </header>
  )
}

export default Header