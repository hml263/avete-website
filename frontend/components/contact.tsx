'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import FadeIn from "@/lib/variants"

const Contact = () => {
  return (
    <section id='contact' className="z-30 translate-y-1 bg-primary">
    <div className="container w-full py-[50px] lg:py-[100px]">
        <div className="flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0">
            <motion.div
                variants={FadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.8 }}

                className="justify-between lg:mr-8 ">
                <h1 className="pb-2 text-[20px] font-medium leading-[3rem]">Get in Touch</h1>
                <p className="text-justify ">Coming Soon……….</p>

            </motion.div>

        </div>
    </div>
</section>
  )
}

export default Contact