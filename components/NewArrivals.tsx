"use client"
import React, { useEffect, useState } from 'react'
import OurHeading from './OurHeading'

import { Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import Image from 'next/image';
import star from "../public/src/assets/star.svg"
import cart from "../public/src/assets/cart-added.svg"
import { useFood } from '@/context/FoodContext';
import NewArrivalSkeleton from '@/skeleton/NewArrivalSkeleton';


export default function NewArrivals() {

    const {food , addToCart} = useFood()

    const [size ,  setSize] = useState<string[]>([])
     useEffect(() => {
            if (food.length > 0) {
                setSize(food.map((item) => item.sizes[0])); 
            }
        }, [food]);
    
      const handelSize = (itemIndex:number , value:string)=>{
        setSize((prev)=> {
            const newSize = [...prev]
            if (newSize[itemIndex] === value){
                newSize[itemIndex] = "";
            }else{
                newSize[itemIndex] = value;
            } 
            return newSize;
        })
    }

    const isLoading = !food || food.length === 0


  return (
    <div className='px-4 md:px-12 py-12'>
        <OurHeading leftText='New' rightText='Arrivals' descriptrion='Discover fresh foods that delight your taste, nourish your body, and bring joy to every meal.'/>
        <div className="mt-10">
            {isLoading ? <NewArrivalSkeleton /> :             <Swiper modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{320:{slidesPerView: 1} , 624:{slidesPerView: 2} , 991:{slidesPerView: 3} , 1024:{slidesPerView: 4} , 1280:{slidesPerView: 5}}}
                autoplay={{delay: 3000 , disableOnInteraction: false}}
    >
        {food.map((item , index)=>{
            return  <SwiperSlide key={index}>
                <div className='mt-12 bg-tertiray rounded-md relative p-2.5'>
                    <div className='absolute left-[50%] translate-x-[-50%] -top-12'>
                        <Image src={item.images[0]} alt='products-image' width={100} height={100} />
                    </div>
                    <h3 className='mt-10 text-xl font-black line-clamp-1'>{item.title}</h3>
                    <div className="mt-2 flex items-center justify-between">
                        <span className='text-base font-medium'>{item.category}</span>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <Image src={star} alt='icon-star' width={20} height={20} />
                                <Image src={star} alt='icon-star' width={20} height={20} />
                                <Image src={star} alt='icon-star' width={20} height={20} />
                                <Image src={star} alt='icon-star' width={20} height={20} />
                                <Image src={star} alt='icon-star' width={20} height={20} />
                            </div>
                            <span className='text-base font-normal text-gray-400'>5.0</span>
                        </div>
                    </div>
                    <p className='mt-2 text-gray-400 font-normal line-clamp-1 text-[14px]'>{item.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                        <div className='flex items-center gap-2'>
                            {item.sizes.map((si , sizeIndex)=>{
                                return <label key={sizeIndex} className={`cursor-pointer w-[30px] h-[30px] flex items-center justify-center ${size[index] === si ? "border-[1px] border-secondary bg-white" : "border-[1px] border-gray-100 bg-gray-200"}`}>
                                    <input value={si} checked={size[index] === si} type="checkbox" className='appearance-none' onChange={()=> handelSize(index , si)}/>
                                    <span className="text-base">{si}</span>
                                </label>
                            })}
                        </div>
                        <span className='text-xl font-bold text-secondary'>${item.price[size[index]] || item.price[item.sizes[0]]}</span>
                    </div>
                    <div className='mt-1'>
                        <div className='flex items-center gap-4'>
                            <div className='flex flex-col gap-1'>
                                <span className='text-base font-semibold'>Prep</span>
                                <span className='text-[14px] font-normal text-gray-400'>5m</span>
                            </div>
                            <div className='flex flex-col gap-1 border-l-[1px] border-l-secondary pl-5'>
                                <span className='text-base font-semibold'>Prep</span>
                                <span className='text-[14px] font-normal text-gray-400'>5m</span>
                            </div>
                        </div>
                        <div onClick={()=> addToCart(item._id , item.images[0] , item.title , size[index] , item.price[size[index]] ?? 0 , 1)} className='cursor-pointer w-10 h-10 rounded-md absolute bottom-0 right-0 flex items-center justify-center bg-secondary'>
                            <Image src={cart} alt='icon-cart' width={25} height={25} />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        })}
    </Swiper>}


        </div>
    </div>
  )
}
