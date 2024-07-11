'use client'
import { useTranslations } from 'next-intl'
import { Link, animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'
import Nav from './nav'
import MobileNav from './mobileNav'
import LanguageSwitcher from './languageSwitcher'


const Header = () => {
    
  return (
    <header className="fixed z-40 w-full bg-transparent py-3 xl:py-3">
        <div className=" container mx-auto flex items-center justify-between">
            {/* logo */}
            <Link to='/' spy = {true} smooth={true}
            className='cursor-pointer z-0'>
                <Image src='/avete-logo.png' width={120} height={120} alt='logo' />
            </Link>


            {/* desktop nav */}
            <div className="hidden items-center gap-x-8 xl:flex ">
                <Nav />
                <Link to='/' spy={true} smooth={true}
                className=" opacity-1 text-md rounded-full bg-yellow px-6 py-2 text-medium text-blue font-bold transition-all hover:text-primary cursor-pointer"> 
                    Sign Up
                </Link>
               <LanguageSwitcher />
             
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