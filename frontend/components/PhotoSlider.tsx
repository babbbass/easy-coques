"use client"
import Image from "next/image"
import clsx from "clsx"
import { useStoreSlider } from "@/stores/slider.store"

export function PhotoSlider() {
  const { grandView, setGrandView, sliderPresentation } = useStoreSlider()

  return (
    <div className='flex flex-col-reverse lg:flex-row lg:max-h-[460px] gap-4 items-center '>
      <div className='flex flex-row lg:flex-col h-full overflow-x-hidden gap-2 items-center w-full'>
        {sliderPresentation.map((img, index) => (
          <Image
            width={70}
            height={10}
            key={index}
            src={`/images/iphones/${img.pictures}`}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setGrandView(img)}
            className={clsx(`cursor-pointer rounded-2xl p-[1px]`, {
              "border border-black": img.name === grandView.name,
            })}
          />
        ))}
      </div>

      <div className='flex flex-1 justify-start'>
        <Image
          width={450}
          height={10}
          src={`/images/iphones/${grandView.pictures}`}
          alt='Selected'
          className='rounded-3xl'
        />
      </div>
    </div>
  )
}
