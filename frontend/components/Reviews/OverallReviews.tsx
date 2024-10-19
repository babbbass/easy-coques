import React from "react"
import Image from "next/image"
import { Star } from "lucide-react"

export function OverallReviews() {
  return (
    <div className='my-8 flex flex-col sm:flex-row items-center justify-center sm:items-start gap-5 w-full'>
      <div className='flex -space-x-4'>
        <Image
          width={20}
          height={20}
          className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
          src='/users/user-1.png'
          alt='user image'
        />
        <Image
          width={20}
          height={20}
          className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
          src='/users/user-2.png'
          alt='user image'
        />
        <Image
          width={20}
          height={20}
          className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
          src='/users/user-3.png'
          alt='user image'
        />
        <Image
          width={20}
          height={20}
          className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
          src='/users/user-4.jpg'
          alt='user image'
        />
        <Image
          width={20}
          height={20}
          className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
          src='/users/user-5.jpg'
          alt='user image'
        />
      </div>
      <div className='flex flex-col justify-between items-center sm:items-start gap-2 md:gap-1'>
        <div className='flex gap-0.5'>
          <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
          <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
          <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
          <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
          <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
        </div>

        <p>
          <span className='font-semibold'>+ 1250</span> clients statisfaits
        </p>
      </div>
    </div>
  )
}
