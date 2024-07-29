'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import FadeIn from "@/lib/variants"
import { useTranslations } from "next-intl"

const Company = () => {
  const t = useTranslations('Company')
    return (
        <section id='company' className="z-30 translate-y-1 pt-[10px]">

            <div className="container w-full ">
                <h1 className='text-[30px] font-medium  leading-[3rem] pb-[30px] pt-[130px]'>
                    <span className='under-line uppercase'>Our Team</span></h1>
                   
                    <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-secondary text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        className="rounded-t-lg mx-auto block"
        src="/uttam.jpg"
        alt="CEO" width="370" height=""/>
    </a>
    <div className="p-6">
      <h5 className="mb-2 text-xl font-medium leading-tight">Uttam Dwivedi, CEO</h5>
      <p className="mb-4 text-sm text-justify">
      He completed his bachelor&apos;s degree at IIT Kanpur before joining the Civil Engineering department of the University of Tokyo to pursue a master&apos;s in remote sensing. After graduating, he worked in the innovation division of Ando Hazama Corporation, where he led a team to develop smart construction solutions using artificial intelligence. His approach to technology focuses on creating seamless integrations that blend effortlessly into the background while significantly enhancing user experience and productivity. With extensive experience in consulting and leading generative AI-related projects, he has made substantial contributions to the manufacturing, construction, and management consulting industries, always striving to make technology an invisible yet powerful ally for users.
      </p>
    </div>
    {/* <div
      className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
      <small>Last updated 3 mins ago</small>
    </div> */}
  </div>

  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-secondary text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        className="rounded-t-lg"
        src="/Rahul-1.jpg"
        alt="COO" width="400" height="" />
    </a>
    <div className="p-6 bg-secondary">
      <h5 className="mb-2 text-xl font-medium leading-tight">Rahul Garg, COO</h5>
      <p className="mb-4 text-sm text-justify">
      Rahul is a seasoned entrepreneur with a strong technical background from IIT Hyderabad and advanced education from the University of Tokyo. With extensive international experience and a deep understanding of both technical and business aspects, he excels in strategic planning, operations management, and driving growth. As COO, Rahul is dedicated to enhancing safety in the construction industry through innovative IT solutions. His leadership and strategic vision are key to our company&apos;s success in delivering cutting-edge technology and ensuring operational excellence.
      </p>
    </div>
    {/* <div
      className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
      <small>Last updated 3 mins ago</small>
    </div> */}
  </div>

  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-secondary text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <Image
        className=" mx-auto block"
        src="/koike.jpg"
        alt="KOIKE" width="170" height="400" />
    </a>
    <div className="p-6">
      <h5 className="mb-2 text-xl font-medium leading-tight">KOIKE TSUNEO, External Advisor</h5>
      <p className="mb-4 text-sm text-justify">
      With many years of experience in the construction industry, he is now dedicated to leveraging this expertise to contribute to the field of AI development in the industry. His deep understanding of construction processes and technologies enables him to bring a unique perspective to AI solutions, ensuring they are practical, efficient, and innovative. Committed to driving advancements in construction, he aim to transform the industry and improve safety through his strategic insights.
      </p>
    </div>
    {/* <div
      className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
      <small>Last updated 3 mins ago</small>
    </div> */}
  </div>
</div>

              
                <h1 className='text-[30px] font-medium  leading-[3rem] pb-[30px] pt-[100px]'>
                    <span className='under-line uppercase'>{t('corporate-info')}</span></h1>
                <motion.div
                    variants={FadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.8 }} className="max-w-sm w-full lg:max-w-full lg:flex mb-4 px-2">

                    <div className=" bg-secondary rounded-b lg:rounded-b-none lg:rounded-l  p-4 flex flex-col justify-between leading-normal  lg:w-full">

                        <div className="py-[100px]">
                            <table className="table-auto ">

                                <tbody >
                                    <tr className="border-b">
                                        <td className="py-4 ">{t('company-name')}</td>

                                        <td>: {t('avete')}</td>

                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4 ">{t('address')}</td>
                                        <td>: {t('tokyo')}</td>

                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4 ">{t('established')}</td>
                                        <td>: {t('e-date')}</td>

                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4 ">{t('capital')}</td>
                                        <td>: 1,000,000 Yen</td>

                                    </tr>
                                </tbody>
                            </table>


                        </div>

                    </div>
                    <div className="h-48 lg:h-auto lg:w-[600px] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url('/map.png')` }} >

                    </div>
                </motion.div>
             


                
            </div>

        </section>
      
      
     
    )
}

export default Company