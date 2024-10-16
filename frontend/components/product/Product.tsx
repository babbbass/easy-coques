"use client"
import React from "react"
import { useProductStore } from "@/stores/product.store"
import { Description } from "@/components/product/Description"
import { Model } from "@/components/product/Model"
import { Quantity } from "@/components/quantity"
import { Separator } from "@/components/separator"
export default function Product() {
  const { products } = useProductStore()
  return (
    <>
      <Description />
      <Separator margin={4} />
      <Model models={products} />
      <Quantity />
    </>
  )
}
