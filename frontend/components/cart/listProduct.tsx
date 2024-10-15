"use client"
import React from "react"
import { Separator } from "@/components/separator"
import { Product } from "@/components/cart/product"
import { useStoreCart } from "@/stores/cart.store"

export function ListProduct() {
  const { items } = useStoreCart()
  return (
    <section className='flex items-center justify-center flex-col gap-3 w-full'>
      {items.map((product: any, index: number) => (
        <>
          <Product key={index} product={product} />
          <Separator margin={5} />
        </>
      ))}
    </section>
  )
}
