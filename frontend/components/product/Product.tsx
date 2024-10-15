"use client"
import React from "react"
import { useProductStore } from "@/stores/product.store"
import { Description } from "@/components/product/description"
import { Model } from "@/components/Model"
import { Quantity } from "@/components/quantity"
import { Separator } from "@/components/separator"
export default function Product() {
  const { products, product } = useProductStore()
  return (
    <>
      <Description />
      <Separator margin={4} />
      <Model models={products} />
      <Quantity />
    </>
  )
}
