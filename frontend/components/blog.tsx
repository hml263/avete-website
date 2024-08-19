'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import FadeIn from "@/lib/variants"
import {useEffect, useState} from 'react'
import BlogList from "./blogList"
import apiService from "@/app/services/apiService"

export type BlogType ={
    id: string;
    title: string;
    description: string;
    category:string;
    image_url:string;
}

const Blog = () => {
    const [blogs, setBlogs] = useState<BlogType[]>([]);

    const getBlogs = async () => {
    

      const tmpBlogs = await apiService.get('/api/blogs')

      setBlogs(tmpBlogs.data);
        
    };

    useEffect(() => {
        apiService.get('/api/blogs');

        getBlogs();
    }, []);

    return (
        <>
        <section id='blog' className="z-30 translate-y-1 pt-[150px]">
            <div className="container w-full ">
                <div className="flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0">
                    <div className="justify-between ">
                        <h1 className='text-[30px] font-medium  leading-[3rem] pb-[30px]'>
                            <span className='under-line uppercase'>News/Blog</span></h1>

                    {blogs.map((blog) => {
                        return (
                            <BlogList
                            key={blog.id}
                            blog={blog} />
                        )
                    })}        
                   


                        {/* <p className="text-justify ">Coming Soon……….</p> */}



                    </div>

                </div>
                <div className="flex items-center justify-center">
                <nav aria-label="Page navigation example ">
  <ul className="flex items-center -space-x-px h-8 text-sm justigy-center">
    <li>
      <a href="#blog" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Previous</span>
        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>
    </li>
   
    <li>
      <a href="#blog" aria-current="page" className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
    </li>
    {/* <li>
      <a href="#blog" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#blog" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
    </li> */}
    <li>
      <a href="#blog" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Next</span>
        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>
</div>
            </div>
        </section>
        </>
    )
}

export default Blog