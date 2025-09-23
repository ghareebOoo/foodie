"use client"
import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default function SidebarSkeleton() {
  return (
    <div className="absolute top-[120px] z-40 w-full h-auto px-4 py-10 bg-white rounded-md xl:static xl:w-[300px] xl:rounded-none xl:rounded-r-md">
      
      <div className="relative w-full h-[38px]">
        <Skeleton className="w-full h-full rounded-xl" />
        <Skeleton className="w-6 h-6 rounded absolute right-2 top-[50%] translate-y-[-50%]" />
      </div>

      <div className="mt-5 rounded-xl p-4 bg-gray-200">
        <Skeleton className="h-5 w-28" /> 
        <Skeleton className="mt-3 h-10 w-full rounded" /> 
      </div>

      <div className="mt-5 rounded-xl p-4 bg-gray-200">
        <Skeleton className="h-5 w-24" /> 
        <div className="mt-3 flex flex-col gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="w-4 h-4 rounded" />
              <Skeleton className="h-4 w-20 rounded" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-xl p-4 bg-gray-200">
        <Skeleton className="h-5 w-20" /> 
        <div className="mt-3 flex flex-col gap-3">
          {Array.from({ length: 26 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="w-4 h-4 rounded" />
              <Skeleton className="h-4 w-20 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
