"use client"
import Image from "next/image"
import clsx from "clsx"
import { useStoreSlider } from "@/stores/slider.store"
import { useProductStore } from "@/stores/product.store"
import { useState } from "react"

export function Colors() {
  const { setGrandView, slider } = useStoreSlider()
  const { addColor, product, color } = useProductStore()
  // const [color, setColor] = useState(slider[0])
  return (
    <div className='flex gap-2 flex-col flex-wrap my-4'>
      <p className='text font-bold'>
        Couleur: <span className='font-medium underline'>{color}</span>
      </p>
      <div className='flex gap-3'>
        {slider.map((image, index) => (
          <Image
            alt={image.name}
            width={64}
            height={64}
            key={index}
            onClick={() => {
              setGrandView(image)
              // setColor(color)
              addColor(image.name, product)
            }}
            className={clsx(
              `w-16 h-16 bg-cover rounded-lg cursor-pointer hover:border-2 hover:border-blue-600 p-[1px]`,
              {
                "border-2 border-blue-600": image.name === color,
              }
            )}
            src={`/images/iphones/${image.pictures}`}
          />
        ))}
      </div>
    </div>
  )
}
