'use client'

import { Link, animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'
import Nav from './nav'
import MobileNav from './mobileNav'

const Header = () => {
  return (
    <header className="fixed z-40 w-full bg-primary py-6 xl:py-8">
        <div className=" container mx-auto flex items-center justify-between">
            {/* logo */}
            <Link to='/' spy = {true} smooth={true}
            className='cursor-pointer'>
                <Image src='/a-sample.png' width={40} height={40} alt='logo' />
            </Link>


            {/* desktop nav */}
            <div className="hidden items-center gap-x-8 xl:flex">
                <Nav />
                <Link to='/' spy={true} smooth={true}
                className="text-md rounded-full bg-yellow px-6 py-2 text-medium text-white transition-all hover:text-primary cursor-pointer"> 
                    Sign Up
                </Link>
                <p>JP | EN</p>
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