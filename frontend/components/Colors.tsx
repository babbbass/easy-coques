"use client"
import Image from "next/image"
import clsx from "clsx"
import { useStoreSlider } from "@/stores/slider.store"
import { useState } from "react"

export function Colors() {
  const { setGrandView, slider } = useStoreSlider()
  const [color, setColor] = useState(slider[0])
  return (
    <div className='flex gap-2 flex-col flex-wrap my-4'>
      <p className='text font-bold'>
        Couleur: <span className='font-medium underline'>{color.name}</span>
      </p>
      <div className='flex gap-3'>
        {slider.map((product, index) => (
          <Image
            alt={product.name}
            width={64}
            height={64}
            key={index}
            onClick={() => {
              setGrandView(product)
              setColor(product)
            }}
            className={clsx(
              `w-16 h-16 bg-cover rounded-lg cursor-pointer hover:border-2 hover:border-blue-600 p-[1px]`,
              {
                "border-2 border-blue-600": product === color,
              }
            )}
            src={`/images/iphones/${product.pictures}`}
          />
        ))}
      </div>
    </div>
  )
}
