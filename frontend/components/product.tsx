'use client'
import { useTranslations } from "next-intl"
import Image from "next/image"
import { motion } from 'framer-motion'
import FadeIn from "@/lib/variants"

const Product = () => {
  const t = useTranslations('Product')
  return (
    <section id='product' className="z-30 translate-y-1 pt-[150px]">
    <div className="container w-full ">
        <div className="flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0">
            <div
            className="justify-between lg:mr-8 ">
                <h1 className='text-[30px] font-medium  leading-[3rem] pb-[30px]'>
                             <span className='under-line uppercase'>Seeing with Insight</span></h1>
                      
             
                <p className="text-justify ">With advancements in IoT and AI technologies, construction sites are generating massive amounts of data. Utilizing this data effectively is more important than ever to maximize impact and draw meaningful insights. Our platform leverages this data to recommend context-specific safety guidelines for common construction activities, promoting continuous learning and enhanced safety protocols.

</p><br />
<br /><br />
  <div className="hidden xl:grid grid-cols-4 gap-4 ">
  <div className=""><div className="vertical-text mt-[180px] mb-[70px]">{t('p-glass')} <Image
              src='/img-01.png' height={200} width={200} alt='mission' className="relative right-[-160px] vertical-img rounded-xl" /></div>
  </div>
  <div><Image
              src='/img-04.png' height={100} width={130} alt='mission' className="relative top-[50px] rounded-xl" /></div>
  <div></div>
  <div className="text-center text-xl relative left-[-130px] top-[60px]">{t('protocols')}<br/>
⇩
</div>
  <div className=""><div className="vertical-text ">{t('p-phone')}e<Image
              src='/img-02.png' height={200} width={200} alt='mission' className="relative right-[-160px] vertical-img rounded-xl" /></div></div>
  <div><Image
              src='/img-05.png' height={100} width={130} alt='mission' className="relative top-[-140px] rounded-xl" /></div>
  <div><Image
              src='/img-07.png' height={100} width={180} alt='mission' className="relative top-[-140px] right-[80px] rounded-xl" /></div>
  <div>Table</div>
  <div className=""><div className="vertical-text ">{t('p-cam')}<Image
              src='/img-03.png' height={200} width={200} alt='mission' className="relative right-[-110px] vertical-img rounded-xl" /></div></div>
  <div><Image
              src='/img-06.png' height={100} width={130} alt='mission' className="relative top-[-90px] rounded-xl" /></div>
  <div></div>
  <div></div>
  
</div>
            </div>
           
        </div>
    </div>
</section>
  )
}

export default Product