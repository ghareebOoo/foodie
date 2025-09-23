import Link from 'next/link'
import React from 'react'
import userOne from "../public/src/assets/user1.png"
import userTwo from "../public/src/assets/user2.png"
import userThree from "../public/src/assets/user3.png"
import userFour from "../public/src/assets/user4.png"
import star from "../public/src/assets/star.svg"
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="h-full flex flex-col justify-center px-4 md:px-12 py-6 lg:bg-[url('/src/assets/bg.png')] bg-contain bg-center bg-no-repeat">
        <div>
            <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>Fresh Bites for Every Mood</h2>
            <p className='mt-2 text-secondary text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold'>Get More <span className='text-orange'>for Less – 25% Off!</span></p>
            <p className='mt-3 mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>on Rice & Curries</p>
            <span className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold'>Starting From<span className='bg-white py-2 px-3'>$04.99</span></span>
        </div>
        <div className='mt-12'>
            <Link href={"/menu"} className="bg-secondary px-16 py-6 text-white text-base font-semibold">Shop Now</Link>
            <div className='flex flex-col md:flex-row md:items-center gap-4 mt-[22px]'>
                <div className='flex'>
                    <Image src={userOne} alt='user-image' width={50} height={50} className='rounded-full transition-all duration-300 hover:-translate-y-2'/>
                    <Image src={userTwo} alt='user-image' width={50} height={50} className='rounded-full transition-all duration-300 hover:-translate-y-2 -ml-2.5'/>
                    <Image src={userThree} alt='user-image' width={50} height={50} className='rounded-full transition-all duration-300 hover:-translate-y-2 -ml-2.5'/>
                    <Image src={userFour} alt='user-image' width={50} height={50} className='rounded-full transition-all duration-300 hover:-translate-y-2 -ml-2.5'/>
                </div>
                <div className='md:border-l-[1px] md:border-l-gray-400 md:pl-5'>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <Image src={star} alt='icon-star' width={25} height={25} />
                            <Image src={star} alt='icon-star' width={25} height={25} />
                            <Image src={star} alt='icon-star' width={25} height={25} />
                            <Image src={star} alt='icon-star' width={25} height={25} />
                            <Image src={star} alt='icon-star' width={25} height={25} />
                        </div>
                        <span className='text-base font-normal text-gray-400'>5.0</span>
                    </div>
                    <p className='text-base font-normal text-gray-400'>Trusted by <span className="text-black">100,000+</span> users</p>
                </div>
            </div>
        </div>
    </div>
  )
}
