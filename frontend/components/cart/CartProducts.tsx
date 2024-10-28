"use client"
import React, { useState } from "react"
import { Trash2, MinusCircle, CirclePlus } from "lucide-react"
import { useStoreCart } from "@/stores/cart.store"
import { ProductType } from "@/utils/types/types"
import Image from "next/image"
import { clsx } from "clsx"
import { Separator } from "@/components/separator"

type CartProductsProps = {
  product: ProductType
}

export function CartProducts({ product }: CartProductsProps) {
  const [quantity, setQuantity] = useState(product.quantity)
  const { removeItem, addItem } = useStoreCart()
  return (
    <>
      <div className='w-full md:w-3/4 flex md:min-h-[200px] gap-4'>
        <div className='w-1/4 flex md:justify-center'>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/${product.image.url}`}
            width={200}
            height={100}
            alt={product.name}
          />
        </div>
        <div className='flex flex-col flex-1 items-center justify-center font-semibold'>
          <div className='flex gap-4 w-full min-h-20'>
            <div className='w-4/6'>
              <h3 className='text-sm md:text-xl text-blue-600'>
                {product.name}
              </h3>
              <p className='text-sm text-black/70'>{product?.color}</p>
            </div>
            <div className='w-2/6 pt-1'>
              <div className='flex gap-2'>
                <MinusCircle
                  className={clsx(`text-gray-500 cursor-pointer`, {
                    "opacity-20 cursor-not-allowed": quantity === 1,
                  })}
                  onClick={() => {
                    if (quantity <= 1) return
                    setQuantity(quantity - 1)
                    addItem({
                      ...product,
                      quantity: -1,
                      price: -product.priceUnit,
                    })
                  }}
                />
                {quantity}{" "}
                <CirclePlus
                  className={clsx(`text-gray-500 cursor-pointer`, {
                    "opacity-20 cursor-not-allowed": quantity >= 5,
                  })}
                  onClick={() => {
                    if (quantity >= 5) return
                    addItem({
                      ...product,
                      quantity: 1,
                      price: product.priceUnit,
                    })
                    setQuantity((v) => v + 1)
                  }}
                />
              </div>
            </div>
            <div className='pt-1'>{product.price}€</div>
            <button
              aria-label='Supprimer produit de votre panier'
              className='flex items-start pt-1'
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
      <Separator margin={4} key={product.id} />
    </>
  )
}
