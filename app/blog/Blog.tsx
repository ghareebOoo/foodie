import React from 'react'
import {Blogs} from "../../type"
import {blogs} from "../../public/src/assets/data"
import Image from 'next/image'
export default function Blog() {
  return (
    <div className='px-4 md:px-12 py-12 bg-tertiray'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {blogs.map((item:Blogs , index)=>{
          return <div key={index} className='cursor-pointer bg-white transition-all duration-500 hover:shadow-xl'>

            <div className='flex'>
              <div className='flex items-center justify-between rotate-180 p-2.5 our-blog gap-2'>
                <span>{item.category}</span>
                <div className='w-[2px] flex-1 h-full bg-primary'></div>
                <span>23/9/2025</span>
              </div>

              <div className='hidden md:block'>
                <Image src={item.image} alt='blog-image' width={150} height={500} className='h-[300px] object-cover'/>
              </div>

              <div className='flex-1 p-4'>
                <h2 className='text-base md:text-lg lg:text-xl font-bold text-black'>{item.title}</h2>
                <p className='mt-5 text-[14px] font-normal text-gray-400 line-clamp-3'>{item.description}</p>
              </div>
            </div>
            <button className='bg-secondary text-white px-4 py-3 block ml-auto'>Read Blog</button>
          </div>
        })}
      </div>
    </div>
  )
}
