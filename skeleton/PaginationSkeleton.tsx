"use client"
import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default function PaginationSkeleton() {
  return (
    <div className='mt-8 flex items-center justify-center gap-4 flex-wrap'>
      <Skeleton className="w-20 h-8" />

      <div className='flex items-center gap-4'>
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="w-8 h-8" />
        ))}
      </div>

      <Skeleton className="w-20 h-8" />
    </div>
  )
}
