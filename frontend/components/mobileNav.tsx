'use client'
import { Menu } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'

export const menu = [
    {
        name:'mission',
        href: '#mission'
    },
    {
        name:'product',
        href: '#product'
    },
    {
        name:'news/blog',
        href: '#blog'
    },
    {
        name:'company',
        href: '#company'
    },
    {
        name:'contact',
        href: '#contact'
    },
]

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger className='flex items-center'>
            <Menu className='size-6 text-yellow' />
        </SheetTrigger>
        <SheetContent className='w-[50%]'>
            <div className='mb-5 mt-16 flex items-center justify-center gap-8'>
                <Link href='/'>
                    <Image src='/avete-logo.png' width={100} height={100} alt='logo' />
                </Link>
            </div>
            <nav className='mt-4 flex flex-col items-center justify-center gap-4'>
                {menu.map((item, index) =>
                    <Link href={item.href} key={index} className='text-lg font-medium capitalize'>
                        <span className='pb-1 transition-all hover:border-b-2 hover:border-yellow hover:text-yellow'>{item.name}</span>
                    </Link>
                    
                )}
               
            </nav>
            <Link href='/' 
                className="flex items-center my-[20px] justify-center opacity-1 text-md rounded-full bg-yellow px-6 py-2 text-medium text-blue font-bold transition-all hover:text-primary cursor-pointer"> 
                    Sign Up
                </Link>
            <div className='flex block items-center justify-center mt-[20px]'>
            <Link href="/en">EN | </Link> 
            <Link href="/jp" className='ml-[5px]'> JP</Link> 
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav