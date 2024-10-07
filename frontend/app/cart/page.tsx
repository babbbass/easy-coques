import { Cart } from "@/components/Cart"
import React from "react"
import { Separator } from "@/components/separator"
import { TotalOrder } from "@/components/totalOrder"
import { ListProduct } from "@/components/cart/listProduct"

export default function Page() {
  return (
    <div className='flex flex-col max-w-7xl mx-auto justify-center items-center flex-1'>
      <Cart />
      <Separator />
      <ListProduct />
      <Separator />
      <TotalOrder />
    </div>
  )
}
