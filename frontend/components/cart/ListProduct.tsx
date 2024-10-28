"use client"
import React from "react"
import { CartProducts } from "@/components/cart/CartProducts"
import { useStoreCart } from "@/stores/cart.store"
import { ProductType } from "@/utils/types/types"

export function ListProductCart() {
  const { items } = useStoreCart()
  return (
    <section className='flex items-center justify-center flex-col w-full'>
      {items.map((product: ProductType, index) => (
        <CartProducts key={`${product.id}-${index}`} product={product} />
      ))}
    </section>
  )
}
