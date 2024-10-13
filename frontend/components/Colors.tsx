"use client"
import React, { useState } from "react"
import Image from "next/image"
import clsx from "clsx"

const colors = [
  { name: "Noir", value: "black.webp" },
  { name: "Bleu foncé", value: "dark-blue.webp" },
  { name: "Violet foncé", value: "dark-purple.webp" },
  { name: "Gris", value: "gray.webp" },
  { name: "Vert", value: "green.webp" },
  { name: "Bleu clair", value: "light-blue.webp" },
]
export function Colors() {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  return (
    <div className='flex gap-2 flex-col flex-wrap my-4'>
      <p className='text font-bold'>
        Couleur:{" "}
        <span className='font-medium underline'>{selectedColor.name}</span>
      </p>
      <div className='flex gap-3'>
        {colors.map((color, index) => (
          <Image
            alt={color.name}
            width={64}
            height={64}
            key={index}
            onClick={() => setSelectedColor(color)}
            className={clsx(
              `w-16 h-16 bg-cover rounded-lg cursor-pointer hover:border-2 hover:border-blue-600 p-[1px]`,
              {
                "border-2 border-blue-600": color === selectedColor,
              }
            )}
            src={`/images/iphones/${color.value}`}
          />
        ))}
      </div>
    </div>
  )
}
