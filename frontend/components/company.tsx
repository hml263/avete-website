'use client'

import {useEffect, useState } from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'
import FadeIn from "@/lib/variants"
import { useTranslations } from "next-intl"
import TeamList from "./teamList"
import apiService from '@/app/services/apiService'

export type TeamType ={
  id: string;
  name: string;
  description: string;
  image_url:string;
}

const Company = () => {
  const [teams, setTeams] = useState<TeamType[]>([]);
  const getTeams = async () => {
    const tmpTeams = await apiService.get('/api/teams')

    setTeams(tmpTeams.data);
    
};

  useEffect(() => {
    apiService.get('/api/teams');
    getTeams();
  }, []);
  const t = useTranslations('Company')

    return (
        <section id='company' className="z-30 translate-y-1 pt-[10px]">

            <div className="container w-full ">
                <h1 className='text-[30px] font-medium  leading-[3rem] pb-[30px] pt-[130px]'>
                    <span className='under-line uppercase'>Our Team</span></h1>
                   
                    <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
                    {teams.map((team) => {
                        return (
                            <TeamList
                            key={team.id}
                            team={team} />
                        )
                    })} 
 
 

 

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