import React from "react"
import { Separator } from "@/components/separator"
import { Product } from "@/components/cart/product"

const products = [1, 2, 3]
export function ListProduct() {
  return (
    <section className='flex flex-col gap-3'>
      {products.map((product: number, index: number) => (
        <>
          <Product key={index} />
          <Separator margin={5} />
        </>
      ))}
    </section>
  )
}
