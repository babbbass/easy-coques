"use client"
import clsx from "clsx"
import React, { useState } from "react"

const types = [
  "iPhone 15 Pro",
  "iPhone 15 Pro Max",
  "iPhone 15 Plus",
  "iphone 15",
  "iPhone 14 Pro",
  "iPhone 14 Pro Max",
  "iPhone 14 Plus",
  "iphone 14",
  "iPhone 13 Pro",
  "iPhone 13 Pro Max",
  "iPhone 13 Plus",
  "iphone 13",
  "iPhone 12 Pro",
  "iPhone 12 Pro Max",
  "iPhone 12 Plus",
  "iphone 12",
]
export function Model() {
  const [selectedType, setSelectedType] = useState(types[0])
  return (
    <>
      <p className='text font-bold'>
        Type: <span className='font-medium'>{selectedType}</span>
      </p>
      <div className='flex flex-wrap gap-2'>
        {types.map((type, index) => (
          <span
            key={index}
            onClick={() => setSelectedType(type)}
            className={clsx(
              `text-sm border border-gray-400 p-2 rounded-lg hover:bg-sky-600 hover:text-white cursor-pointer`,
              {
                "bg-sky-600 text-white": type === selectedType,
              }
            )}
            role='button'
          >
            {type}
          </span>
        ))}
      </div>
    </>
  )
}
