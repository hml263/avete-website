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
        name:'blog',
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
        <SheetContent>
            <div className='mb-10 mt-32 flex items-center justify-center gap-8'>
                <Link href='/'>
                    <Image src='/a-sample.png' width={40} height={40} alt='logo' />
                </Link>
            </div>
            <nav className='mt-4 flex flex-col items-center justify-center gap-4'>
                {menu.map((item, index) =>
                    <Link href={item.href} key={index} className='text-lg font-medium capitalize'>
                        <span className='pb-1 transition-all hover:border-b-2 hover:border-yellow hover:text-yellow'>{item.name}</span>
                    </Link>
                )}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav