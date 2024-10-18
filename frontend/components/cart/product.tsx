"use client"
import React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Trash2 } from "lucide-react"
import { useStoreCart } from "@/stores/cart.store"
import { ProductType } from "@/utils/types/types"
import Image from "next/image"

type ProductProps = {
  product: ProductType
}

export function Product({ product }: ProductProps) {
  const { removeItem } = useStoreCart()

  return (
    <div className='w-full md:w-3/4 flex md:min-h-[200px] gap-4'>
      <div className='w-1/4 flex md:justify-center'>
        <Image
          src='/images/iphone.jpeg'
          width={200}
          height={300}
          alt={product.name}
        />
      </div>
      <div className='flex flex-col flex-1 items-center font-semibold'>
        <div className='flex gap-4 w-full min-h-20'>
          <div className='w-4/6'>
            <h3 className='text-sm md:text-xl text-blue-600'>{product.name}</h3>
            <p className='text-sm text-black/70'>{product?.color}</p>
          </div>
          <div className='w-2/6 pt-1'>
            <Select>
              <SelectTrigger className='w-14 h-1 border-0 rounded-none'>
                <SelectValue
                  placeholder={product.quantity}
                  className='w-10 border-0'
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='1'>1</SelectItem>
                <SelectItem value='2'>2</SelectItem>
                <SelectItem value='3'>3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>{product.price}€</div>
          <button
            aria-label='Supprimer produit de votre panier'
            className='flex items-start'
          >
            <Trash2
              className='w-4 h-4 md:w-5 md:h-4 text-gray-600/70 cursor-pointer pt-1'
              onClick={() => {
                removeItem(product.id)
              }}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
