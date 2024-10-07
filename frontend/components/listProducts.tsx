"use client"
import React from "react"

type Product = {
  name: string
}
type Products = {
  products: Product[]
}
export function ListProducts({ products }: Products) {
  console.log("productss", products)
  return (
    <>
      <div>listProducts</div>
      <div>{products.map((product: Product) => product.name)}</div>
    </>
  )
}
