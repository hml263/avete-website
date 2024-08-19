import React from 'react'
import Image from 'next/image'

const TrustLogo = () => {
  return (
    <div className='center mt-36  justify-center '>
         <h1 className='text-[15px] font-medium text-center  leading-[3rem] '>
         <span className='capitalize'>Trusted By</span></h1>
        <div className='flex  items-center justify-center overflow-x-hidden'>
             <Image src='/avete-logo.png' width={120} height={120} alt='logo' />
             <Image src='/avete-logo.png' width={120} height={120} alt='logo' />
             <Image src='/avete-logo.png' width={120} height={120} alt='logo' />
        </div>
    </div>
  )
}

export default TrustLogo