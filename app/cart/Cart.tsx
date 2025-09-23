"use client"
import { useFood } from '@/context/FoodContext'
import Image from 'next/image'
import React from 'react'
import minus from "../../public/src/assets/minus.svg"
import plus from "../../public/src/assets/plus.svg"
import { IoClose } from "react-icons/io5";
import {motion , AnimatePresence} from "framer-motion"

export default function Cart() {
    const {cart , decreaseCart , increaseCart , deleteCart , clearAll} = useFood()
  return (
    <div className='px-4 md:px-12 py-12 bg-tertiray'>
        <h2 className='text-2xl font-bold uppercase'>Cart <span className='text-orange'>Overview</span></h2>
        <div className='mt-8 flex flex-col gap-5'>
            <AnimatePresence>
                    {cart.map((item , index)=>{
                return <motion.div drag="x" 
                dragConstraints={{left: 0 , right: 0}} 
                onDragEnd={(e , info)=> {if(Math.abs(info.offset.x) > 100){deleteCart(index)}}}
                whileDrag={{scale: 1.03}}
                initial={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 , type: "spring"}}    
                key={index} className='bg-white rounded-md p-2.5 flex items-center gap-4 relative'>
                    <div>
                        <Image src={item.image} alt='cart-image' width={100} height={100}/>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='hidden md:block text-xl font-bold text-black'>{item.title}</h3>
                        <span className='font-semibold text-base'>Size: <span className='text-gray-500'>{item.size}</span></span>
                        <div className='w-fit rounded-full flex items-center gap-2 bg-pink-200 border-[1px] border-gray-400'>
                            <div onClick={()=> decreaseCart(index)} className='cursor-pointer bg-secondary w-8 h-8 rounded-full flex items-center justify-center'>
                                <Image src={minus} alt='icon-minus' width={25} height={25} />
                            </div>
                            <span className='text-gray-500 font-medium text-base'>{item.quantity}</span>
                            <div onClick={()=> increaseCart(index)} className='cursor-pointer bg-secondary w-8 h-8 rounded-full flex items-center justify-center'>
                                <Image src={plus} alt='icon-plus' width={20} height={20} />
                            </div>
                        </div>
                    </div>
                    <div onClick={()=> deleteCart(index)} className='cursor-pointer absolute top-2 right-2'>
                        <IoClose className='text-2xl'/>
                    </div>
                    <div className='absolute bottom-2 right-2'>
                        <span className='text-orange font-bold text-base'>${`${item.price * item.quantity}`}</span>
                    </div>
                </motion.div>
            })}
            </AnimatePresence>
        </div>
        {cart.length > 0 && <>
        <div className='mt-8 bg-white flex items-center justify-between p-2.5 rounded-md'>
            <span className='text-xl font-bold'>TotalPrice</span>
            <span className='text-orange font-bold text-base'>${cart.reduce((acc , cur)=> acc + cur.price * cur.quantity  , 0)}</span>
        </div>
        <button onClick={clearAll} className='cursor-pointer mt-8 w-full p-2.5 bg-red-500 text-white rounded-md'>Clear All</button>
        </> 
        }
        
    </div>
  )
}
