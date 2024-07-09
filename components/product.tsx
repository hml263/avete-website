'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import FadeIn from "@/lib/variants"

const Product = () => {
  return (
    <section id='product' className="z-30 translate-y-1 bg-secondary">
    <div className="container w-full py-[50px] lg:py-[100px]">
        <div className="flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0">
            <motion.div
            variants={FadeIn('up', 0.2)}
            initial= 'hidden'
            whileInView = {'show'}
            viewport= {{ once:true , amount: 0.8}}
            
            className="justify-between lg:mr-8 ">
                <h1 className="pb-2 text-[20px] font-medium leading-[3rem]">Seeing with Insight</h1>
                <p className="text-justify ">With advancements in IoT and AI technologies, construction sites are generating massive amounts of data. Utilizing this data effectively is more important than ever to maximize impact and draw meaningful insights. Our platform leverages this data to recommend context-specific safety guidelines for common construction activities, promoting continuous learning and enhanced safety protocols.

</p>
              
            </motion.div>
           
        </div>
    </div>
</section>
  )
}

export default Product