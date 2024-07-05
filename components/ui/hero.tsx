'use client'

import { Download } from 'lucide-react'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
   <section className='w-f pt-40'>
        <div className='container mx-auto h-full'>
            <div className='flex flex-col items-center justify-between gap-10 xl:flex-row xl:pt-8'>
                {/* texl */}
                <div className='text-center xl:text-left'>
                    <span className='text-[20px] font-medium leading-[2rem]'>Enhancing</span><br />
                    <span className='text-[20px] font-medium leading-[2rem]'>Construction</span><br />
                    <TypeAnimation 
      sequence={[
        'Safety',
        1000,
        'Productivity',
        1000,
        'Training',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2rem', fontWeight: 'bold', display: 'inline-block', color: '#DAEE50', textTransform: 'uppercase' }}
      repeat={Infinity}
    /><br />
                        <span className='text-[20px] font-medium leading-[2rem]'>Next Gen AI</span><br />
                        <div className='py-6'>
                            <p>
                            Revolutionize construction sites with our AI 
powered solution. Our innovative tools seamlessly 
integrate into your workflow, ensuring a safer and 
more efficient work environment.
                            </p>
                        </div>

                </div>

                {/* image */}
            </div>
        </div>
   </section>
  )
}

export default Hero