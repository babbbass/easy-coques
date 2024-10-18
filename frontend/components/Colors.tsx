"use client"
import Image from "next/image"
import clsx from "clsx"
import { useStoreSlider } from "@/stores/slider.store"
import { useProductStore } from "@/stores/product.store"

export function Colors() {
  const { setGrandView, slider } = useStoreSlider()
  const { addColor, color } = useProductStore()

  return (
    <div className='flex gap-2 flex-col flex-wrap my-4 overflow-x-hidden'>
      <p className='text font-bold'>
        Couleur: <span className='font-medium underline'>{color}</span>
      </p>
      <div className='flex gap-3 overflow-x-hidden'>
        {slider.map((image, index) => (
          <Image
            alt={image.name}
            width={70}
            height={10}
            key={index}
            onClick={() => {
              setGrandView(image)
              // setColor(color)
              addColor(image.name)
            }}
            className={clsx(
              `bg-cover rounded-lg cursor-pointer hover:border-2 hover:border-blue-600 p-[1px] object-cover`,
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
