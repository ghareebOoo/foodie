import React from 'react'

type props = {
    leftText: string; 
    rightText: string; 
    descriptrion: string; 
}
export default function OurHeading({leftText , rightText , descriptrion}:props) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold uppercase'>{leftText} <span className='text-orange'>{rightText}</span></h2>
        <p className='mt-3 text-center max-w-[510px] text-gray-400 font-normal text-base'>{descriptrion}</p>
    </div>
  )
}
