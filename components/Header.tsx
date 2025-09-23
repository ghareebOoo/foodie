"use client"
import React, { useMemo, useState } from 'react'
import logo from "../public/src/assets/logo.svg"
import cartIcon from "../public/src/assets/cart-added.svg"
import bars from "../public/src/assets/menu.svg"
import close from "../public/src/assets/menu-close.svg"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiUser } from "react-icons/ci";
import Hero from './Hero'
import { useFood } from '@/context/FoodContext'
import myPhoto from "../public/src/assets/user.jpg"
export default function Header() {

    const links = useMemo(()=>(
        [
            {
                label:"Home",
                href:"/"
            },
            {
                label:"Menu",
                href:"/menu"
            },
            {
                label:"Blog",
                href:"/blog"
            },
            {
                label:"Contact",
                href:"/contact"
            },
        ]
    ),[])

    const pathName = usePathname()
    const [showNav , setShowNav] = useState(false)

    const {cart , token} = useFood()
  return (
    <div className={`${pathName === "/" ? "h-screen bg-tertiray" : "h-[120px] bg-white"} `}>
        {/* HEADER */}
        <div className='px-4 md:px-12 py-6'>
        <div className='w-[95%] flex items-center justify-between absolute top-8 left-[50%] translate-x-[-50%]'>

            <div className='flex gap-1'>
                <Image src={logo} alt='logo-image' width={60} height={30} />
                <div className='hidden md:flex flex-col justify-between'>
                    <h1 className='text-3xl font-bold text-black'>Foodie</h1>
                    <span className='text-secondary font-semibold tex-base uppercase tracking-[8px]'>fiesta</span>
                </div>
            </div>

            {/* DESKTOP */}
            <div className='hidden lg:flex items-center gap-4'>
                {links.map((item , index)=>{
                    return <Link key={index} href={item.href} className={`w-fit relative text-xl font-bold ${pathName === item.href ? "before:absolute before:w-full before:h-[2px] before:bg-secondary before:bottom-[-1px]" : "" }`}>{item.label}</Link>
                })}
            </div>

            <div className='flex items-center gap-4'>
                <div onClick={()=> setShowNav(!showNav)} className='lg:hidden cursor-pointer'>
                    {showNav ? <Image src={close} alt='bars-icon' width={25} height={25} /> :   <Image src={bars} alt='bars-icon' width={25} height={25} />}
                </div>
                <div className='relative'>
                    <Link href={"/cart"} className='bg-white w-10 h-10 rounded-full flex items-center justify-center'>
                        <Image src={cartIcon} alt='cart-icon' width={25} height={25} />
                    </Link>
                    <span className='absolute -top-8 bg-secondary px-4 py-1 rounded-full'>{cart.reduce((acc , cur)=> acc + cur.quantity  , 0)}</span>
                </div>
                {token ? <div className='flex items-center justify-center gap-2 bg-secondary py-3 text-white px-5 rounded-full'>
                    Logout
                    <Image src={myPhoto} alt='image' width={40} height={40} className='w-[40px] h-[40px] rounded-full' />
                </div> : <Link href={"/login"} className='flex items-center justify-center gap-2 bg-secondary py-3 text-white px-5 rounded-full'>
                    Login
                    <CiUser className="text-2xl text-white" />
                </Link>}
                
            </div>
        </div>
        </div>

        {/* MOBILE */}
            <div className={`${showNav ? "h-[240px]" : "h-[0px]"} lg:hidden w-[220px] overflow-hidden transition-[height] duration-700  fixed top-24 rounded-md shadow-md bg-white z-50 right-10`}>
                <div className='h-full py-4 flex flex-col justify-between gap-4'>
                    {links.map((item , index)=>{
                        return <Link onClick={()=> setShowNav(false)} key={index} href={item.href} className={`ml-5 w-fit relative text-xl font-bold ${pathName === item.href ? "before:absolute before:w-full before:h-[2px] before:bg-secondary before:bottom-[-1px]" : "" }`}>{item.label}</Link>
                    })}
                </div>
            </div>

        {/* HERO */}
        {pathName === "/" &&  <Hero />}
    </div>
  )
}
