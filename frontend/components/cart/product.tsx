import React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Image from "next/image"

export function Product() {
  return (
    <div className='w-full flex min-h-[200px] gap-4'>
      <div className='w-1/4 flex items-center justify-center'>
        <Image
          src='/images/iphone.jpeg'
          width={200}
          height={200}
          alt='iphone'
        />
      </div>
      <div className='flex flex-col flex-1 items-center font-semibold'>
        <div className='flex gap-4 w-full min-h-20 pt-2'>
          <h3 className='text-xl w-3/6'>
            Coque transparente avec MagSafe pour iPhone 16 Pro
          </h3>
          <div className='w-2/6'>
            <Select>
              <SelectTrigger className='w-14 h-1 border-0 rounded-none'>
                <SelectValue placeholder='1' className='w-10 border-0' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='1'>1</SelectItem>
                <SelectItem value='2'>2</SelectItem>
                <SelectItem value='3'>3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>20.00€</div>
        </div>
      </div>
    </div>
  )
}
