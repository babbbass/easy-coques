"use client"
import React from "react"
import { Separator } from "@/components/separator"
import { Product } from "@/components/cart/product"
import { useStoreCart } from "@/stores/cart.store"

type ProductProps = {
  id: string
  name: string
  price: number
  quantity: number
  color?: string
}
export function ListProduct() {
  const { items } = useStoreCart()
  return (
    <section className='flex items-center justify-center flex-col w-full'>
      {items.map((product: ProductProps, index: number) => (
        <>
          <Product key={index} product={product} />
          <Separator margin={4} />
        </>
      ))}
    </section>
  )
}
