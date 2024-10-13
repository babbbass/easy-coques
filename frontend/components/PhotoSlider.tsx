"use client"
import Image from "next/image"
import React, { useState } from "react"
import clsx from "clsx"

export function PhotoSlider() {
  const images = [
    "/images/iphones/1.webp",
    "/images/iphones/2.webp",
    "/images/iphones/3.webp",
    "/images/iphones/4.webp",
    "/images/iphones/5.webp",
    "/images/iphones/6.webp",
  ]

  // État pour suivre l'image actuellement sélectionnée
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className='flex w-1/2 max-h-[460px] gap-4'>
      {/* Images en miniatures, alignées verticalement */}
      <div className='flex flex-col flex-wrap gap-2'>
        {images.map((img, index) => (
          <Image
            width={70}
            height={10}
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(img)}
            className={clsx(`cursor-pointer rounded-2xl p-[1px]`, {
              "border border-black": img === selectedImage,
            })}
          />
        ))}
      </div>

      <div className='flex flex-1 justify-start'>
        <Image
          width={450}
          height={10}
          src={selectedImage}
          alt='Selected'
          className='rounded-3xl'
        />
      </div>
    </div>
  )
}
