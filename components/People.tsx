import React from 'react'
import OurHeading from './OurHeading'
import userOne from "../public/src/assets/user1.png"
import userTwo from "../public/src/assets/user2.png"
import userThree from "../public/src/assets/user3.png"
import star from "../public/src/assets/star-black.svg"
import Image from 'next/image'
export default function People() {
  return (
    <div className='px-4 md:px-12 py-12 bg-tertiray'>
      <OurHeading leftText='What' rightText='People Says' descriptrion='Discover fresh foods that delight your taste, nourish your body, and bring joy to every meal.'/>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>

        <div className='rounded-md bg-[#edbdcd] py-5 shadow-md'>
          <div className='flex items-center gap-4 border-b-[1px] border-b-primary px-5 pb-4'>
            <Image src={userOne} alt='userOne-image' width={50} height={50} className='rounded-full'/>
            <div className='flex flex-col gap-2'>
              <h2 className='text-blak text-base md:text-xl font-medium'>Donald Jackman</h2>
              <p className='text-[14px] md:text-base font-normal'>Content Creator</p>
            </div>
          </div>
          <div className='mt-8 px-5 flex flex-col items-start gap-6'>
            <div className='flex items-center gap-1'>
              <Image src={star} alt='star-icon' width={25} height={25} />
              <Image src={star} alt='star-icon' width={25} height={25} />
              <Image src={star} alt='star-icon' width={25} height={25} />
              <Image src={star} alt='star-icon' width={25} height={25} />
              <Image src={star} alt='star-icon' width={25} height={25} />
            </div>
            <p className='text-[14px] font-normal'>I{`'`}ve been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
            <button className='cursor-pointer underline text-base font-normal'>Read more</button>
          </div>
        </div>

        <div className='rounded-md bg-[#cebfab] py-5 shadow-md'>
          <div className='flex items-center gap-4 border-b-[1px] border-b-primary px-5 pb-4'>
            <Image src={userTwo} alt='userTwo-image' width={50} height={50} className='rounded-full'/>
            <div className='flex flex-col gap-2'>
              <h2 className='text-blak text-base md:text-xl font-medium'>Richard Nelson</h2>
              <p className='text-[14px] md:text-base font-normal'>Instagram Influencer</p>
            </div>
          </div>
          <div className='mt-8 px-5 flex flex-col items-start gap-6'>
            <div className='flex items-center gap-1'>
              <Image src={star} alt='icon-star' width={25} height={25} />
              <Image src={star} alt='icon-star' width={25} height={25} />
              <Image src={star} alt='icon-star' width={25} height={25} />
              <Image src={star} alt='icon-star' width={25} height={25} />
              <Image src={star} alt='icon-star' width={25} height={25} />
            </div>
            <p className='text-[14px] font-normal'>I{`'`}ve been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
            <button className='cursor-pointer underline text-base font-normal'>Read more</button>
          </div>
        </div>

        <div className='rounded-md bg-[#ead6ff] py-5 shadow-md'>
          <div className='flex items-center gap-4 border-b-[1px] border-b-primary px-5 pb-4'>
            <Image src={userThree} alt='userThree-image' width={50} height={50} className='rounded-full'/>
            <div className='flex flex-col gap-2'>
              <h2 className='text-blak text-base md:text-xl font-medium'>James Washington</h2>
              <p className='text-[14px] md:text-base font-normal'>Digital Content Creator</p>
            </div>
          </div>
          <div className='mt-8 px-5 flex flex-col items-start gap-6'>
            <div className='flex items-center gap-1'>
              <Image src={star} alt='icon-star' width={25} height={25} />
              <Image src={star} alt='icon-star' width={25} height={25} />
              <Image src={star} alt='icon-star' width={25} height={25} />
              <Image src={star} alt='icon-star' width={25} height={25} />
              <Image src={star} alt='icon-star' width={25} height={25} />
            </div>
            <p className='text-[14px] font-normal'>I{`'`}ve been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
            <button className='cursor-pointer underline text-base font-normal'>Read more</button>
          </div>
        </div>

      </div>
    </div>
  )
}
