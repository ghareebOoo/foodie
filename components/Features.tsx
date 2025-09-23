import React from 'react'
import delivery from "../public/src/assets/delivery.svg"
import secure from "../public/src/assets/secure.svg"
import phone from "../public/src/assets/phone.svg"
import featureOne from "../public/src/assets/features1.png"
import featureTwo from "../public/src/assets/features2.png"
import featureThree from "../public/src/assets/features3.png"
import Image from 'next/image'
export default function Features() {
  return (
    <div className='px-4 md:px-12 py-12 bg-tertiray'>
        <div className='flex flex-col xl:flex-row justify-center items-center xl:items-stretch gap-4'>
            <div className='w-full flex flex-col justify-between items-center xl:items-start'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black'>Discover Our <span className='text-secondary'>Food App{`'`}s key features!</span></h2>
                <p className='mt-5 text-base text-gray-400 font-normal'>Discover fresh foods that delight your taste, nourish your body, and bring joy to every meal.</p>
                <div className="mt-8 flex flex-col gap-5">
                    <div className='flex items-center gap-4'>
                        <div className='w-16 h-16 bg-secondary rounded-md flex items-center justify-center'>
                            <Image src={delivery} alt='icon-delivery' width={25}  height={25}/>
                        </div>
                        <div>
                            <h3 className='text-lg md:text-xl xl:text-2xl font-semibold'>Fast Food Delivery</h3>
                            <p className='text-gray-400 text-[12px] md:text-[14px] font-normal'>Get your favorite meals delivered hot and fresh to your door in just a few minutes.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='w-16 h-16 bg-secondary rounded-md flex items-center justify-center'>
                            <Image src={secure} alt='icon-delivery' width={25}  height={25}/>
                        </div>
                        <div>
                            <h3 className='text-lg md:text-xl xl:text-2xl font-semibold'>Secure Online Payments</h3>
                            <p className='text-gray-400 text-[12px] md:text-[14px] font-normal'>Pay securely using your preferred payment methods with a simple and quick checkout.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='w-16 h-16 bg-secondary rounded-md flex items-center justify-center'>
                            <Image src={phone} alt='icon-delivery' width={25}  height={25}/>
                        </div>
                        <div>
                            <h3 className='text-lg md:text-xl xl:text-2xl font-semibold'>24/7 Order Support</h3>
                            <p className='text-gray-400 text-[12px] md:text-[14px] font-normal'>Our support team is always ready to assist you with any order queries or issues.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex items-stretch gap-4'>
                <div className='w-full'>
                    <Image src={featureOne} alt='featureOne-image' width={300} height={450} className='rounded-md h-full w-full object-cover'/>
                </div>
                <div className='w-full flex flex-col justify-between gap-4'>
                    <Image src={featureTwo} alt='featureTwo-image' width={300} height={225} className='rounded-md w-full h-full object-cover'/>
                    <Image src={featureThree} alt='featureThree-image' width={300} height={225} className='rounded-md w-full h-full object-cover'/>
                </div>
            </div>
        </div>
    </div>
  )
}
