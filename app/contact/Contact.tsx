import React from 'react'
import Image from 'next/image'
import user from "../../public/src/assets/user.svg"
import mail from "../../public/src/assets/mail.svg"
import Link from 'next/link'
export default function Contact() {
  return (
    <div className='px-4 md:px-12 py-12 bg-tertiray'>
      <div className='w-full max-w-[500px] mx-auto flex flex-col justify-center items-center'>
              <span className='bg-[#000000cc] text-white w-fit px-2 py-1 rounded-full'>Contact Us</span>
              <h2 className='mt-3 text-xl md:text-2xl font-bold'>Let’s <span className='text-orange'>Get In Touch.</span></h2>
              <div className='mt-3 flex items-center justify-center flex-wrap gap-1 text-[14px] font-semibold'>Or just reach out manually to us at <Link href={"to:hello@FoodieFiesta.com"}><span className='text-secondary transition-all duration-300 hover:underline'>hello@FoodieFiesta.com</span></Link></div>
              <form className='mt-8 w-full'>
                <label>Full Name</label>
                <div className='w-full mt-2 mb-4 relative'>
                  <Image src={user} alt='icon' width={30} height={30} className='absolute left-3 top-[50%] translate-y-[-50%] w-[30px]' />
                  <input type='text' className='border-[1px] border-primary w-full bg-pink-200 rounded-full pl-12 py-3 outline-none' placeholder='Enter Your Full Name'/>
                </div>
      
                <label>Email Address</label>
                <div className='w-full mt-2 mb-4 relative'>
                  <Image src={mail} alt='icon' width={30} height={30} className='absolute left-3 top-[50%] translate-y-[-50%] w-[30px]' />
                  <input type='email' className='border-[1px] border-primary w-full bg-pink-200 rounded-full pl-12 py-3 outline-none' placeholder='Enter Your Email Address'/>
                </div>
      
                <label>Message</label>
                <div className='w-full mt-2'>
                  <textarea className='border-[1px] border-primary w-full bg-pink-200 h-[120px] pt-4 rounded-xl pl-4 outline-none' placeholder='Enter Your Message'></textarea>
                </div>
      
                <button type='submit' className=' mt-4 cursor-pointer py-3 w-full bg-secondary text-white rounded-full font-normal'>Submit Form</button>
              </form>
            </div>
    </div>
  )
}
