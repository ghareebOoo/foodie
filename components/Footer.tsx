import React from 'react'
import logo from "../public/src/assets/logo.svg"
import facebook from "../public/src/assets/facebook.svg"
import instagram from "../public/src/assets/instagram.svg"
import twitter from "../public/src/assets/twitter.svg"
import linkedin from "../public/src/assets/linkedin.svg"
import Image from 'next/image'
export default function Footer() {
  return (
    <div className='px-4 md:px-12 py-12 bg-tertiray'>
        <div className='flex justify-between flex-wrap gap-x-4 gap-y-8'>

            <div className='w-max'>
                <div className='flex gap-1'>
                    <Image src={logo} alt='logo-image' width={60} height={30} />
                    <div className='hidden md:flex flex-col justify-between'>
                        <h1 className='text-3xl font-bold text-black'>Foodie</h1>
                        <span className='text-secondary font-semibold tex-base uppercase tracking-[8px]'>fiesta</span>
                    </div>
                </div>
                <p className='max-w-[370px] my-5 text-gray-400 font-normal text-base'>Discover premium beauty with our cosmetic collection, crafted to enhance your natural glow, boost confidence, and deliver flawless elegance every day.</p>
                <div className='flex items-center gap-2'>
                    <Image src={facebook} alt='facebook-icon' width={30} height={30} />
                    <Image src={instagram} alt='instagram-icon' width={30} height={30} />
                    <Image src={twitter} alt='twitter-icon' width={30} height={30} />
                    <Image src={linkedin} alt='linkedin-icon' width={30} height={30} />
                </div>
            </div>

            <div className='w-max'>
                <h2 className='uppercase text-xl font-semibold'>Company</h2> 
                <div className='mt-5 flex flex-col gap-3'>
                    <p className='text-base font-normal'>About</p>
                    <p className='text-base font-normal'>Careers</p>
                    <p className='text-base font-normal'>Press</p>
                    <p className='text-base font-normal'>Blog</p>
                    <p className='text-base font-normal'>Partners</p>
                </div>
            </div>

            <div className='w-max'>
                <h2 className='uppercase text-xl font-semibold'>Support</h2> 
                <div className='mt-5 flex flex-col gap-3'>
                    <p className='text-base font-normal'>Help Center</p>
                    <p className='text-base font-normal'>Safety Information</p>
                    <p className='text-base font-normal'>Cancellation Options</p>
                    <p className='text-base font-normal'>Contact Us</p>
                    <p className='text-base font-normal'>Accessibility</p>
                </div>
            </div>

            <div className='w-max'>
                <h2 className='uppercase text-xl font-semibold'>Stay Updated</h2>
                <p className='max-w-[350px] my-5 text-gray-400 font-normal text-base'>Subscribe to our newsletter for inspiration and special offers.</p>
                <div className="relative w-full h-[45px]">
                    <input placeholder='Your email' className='outline-none rounded-full px-2 h-full border-[1px] border-primary w-full bg-pink-200'/>
                    <button className='cursor-pointer bg-secondary text-white px-4 rounded-full h-[35px] absolute right-1 top-[50%] translate-y-[-50%]'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}
