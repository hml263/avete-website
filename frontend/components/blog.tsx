'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import FadeIn from "@/lib/variants"

const Blog = () => {
    return (
        <section id='blog' className="z-30 translate-y-1 pt-[150px]">
            <div className="container w-full ">
                <div className="flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0">
                    <div className="justify-between ">
                        <h1 className='text-[30px] font-medium  leading-[3rem] pb-[30px]'>
                            <span className='under-line uppercase'>News/Blog</span></h1>

                            
                        <div className="max-w-sm w-full lg:max-w-full lg:flex mb-[30px]">
                            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  style={{
                                backgroundImage: `url('/mission-pic.png')`
                            }} >
                            </div>
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <p className="text-sm text-gray-600 flex items-center">
                                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                        </svg>
                                        Technology
                                    </p>
                                    <div className="text-gray-900 font-bold text-xl mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                </div>
                                <div className="flex items-center">

                                    <div className="text-sm">

                                        <p className="text-gray-600">View More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{
                                backgroundImage: `url('/mission-pic.png')`
                            }} >
                            </div>
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <p className="text-sm text-gray-600 flex items-center">
                                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                        </svg>
                                        Technology
                                    </p>
                                    <div className="text-gray-900 font-bold text-xl mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                </div>
                                <div className="flex items-center">

                                    <div className="text-sm">

                                        <p className="text-gray-600">View More</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <p className="text-justify ">Coming Soon……….</p> */}



                    </div>

                </div>
            </div>
        </section>
    )
}

export default Blog