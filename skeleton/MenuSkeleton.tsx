"use client"
import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
export default function MenuSkeleton() {
  return (
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className='mt-12 rounded-md relative p-2.5 bg-gray-200'>
          
          <div className='absolute left-[50%] translate-x-[-50%] -top-12'>
            <Skeleton className='w-[100px] h-[100px] rounded-full' />
          </div>

          <Skeleton className='mt-10 h-6 w-3/4 rounded' />

          <div className="mt-2 flex items-center justify-between">
            <Skeleton className='h-4 w-16 rounded' />
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Skeleton key={starIndex} className='w-5 h-5 rounded' />
                ))}
              </div>
              <Skeleton className='h-4 w-8 rounded' />
            </div>
          </div>

          <Skeleton className='mt-2 h-4 w-full rounded' />

          <div className="mt-3 flex items-center justify-between">
            <div className='flex items-center gap-2'>
              {Array.from({ length: 3 }).map((_, sizeIndex) => (
                <Skeleton
                  key={sizeIndex}
                  className="w-[25px] h-[25px] rounded"
                />
              ))}
            </div>
            <Skeleton className='h-6 w-12 rounded' />
          </div>

          <div className='mt-1'>
            <div className='flex items-center gap-4'>
              <div className='flex flex-col gap-1'>
                <Skeleton className='h-4 w-10 rounded' />
                <Skeleton className='h-4 w-8 rounded' />
              </div>
              <div className='flex flex-col gap-1 border-l-[1px] border-l-accent pl-5'>
                <Skeleton className='h-4 w-10 rounded' />
                <Skeleton className='h-4 w-8 rounded' />
              </div>
            </div>

            <div className='w-10 h-10 rounded-md absolute bottom-0 right-0 flex items-center justify-center bg-gray-200'>
              <Skeleton className='w-[25px] h-[25px] rounded' />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
