"use client"
import clsx from "clsx"
import React, { useState } from "react"
import { ProductType } from "@/types/types"
import { useProductStore } from "@/stores/product.store"
import { Colors } from "@/components/Colors"

type ModelProps = {
  models: ProductType[]
}

export function Model({ models }: ModelProps) {
  const { setProduct } = useProductStore()
  const [selectedType, setSelectedType] = useState(models[0].name)
  return (
    <>
      <p className='text font-bold'>
        Type: <span className='font-medium'>{selectedType}</span>
      </p>
      <div className='flex flex-wrap gap-2'>
        {models.map((type, index) => (
          <span
            key={index}
            onClick={() => {
              setProduct(type)
              setSelectedType(type.name)
            }}
            className={clsx(
              `text-sm border border-gray-400 p-2 rounded-lg hover:bg-sky-600 hover:text-white cursor-pointer`,
              {
                "bg-sky-600 text-white": type.name === selectedType,
              }
            )}
            role='button'
          >
            {type.name}
          </span>
        ))}
      </div>
      <Colors />
    </>
  )
}
