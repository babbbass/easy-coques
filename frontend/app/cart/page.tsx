import { Cart } from "@/components/Cart"
import React from "react"
import { Separator } from "@/components/separator"
import { TotalOrder } from "@/components/totalOrder"
import { ListProduct } from "@/components/cart/listProduct"
import { PageContainer } from "@/components/PageContainer"

export default function Page() {
  return (
    <PageContainer>
      <Cart />
      <Separator />
      <ListProduct />
      <Separator />
      <TotalOrder />
    </PageContainer>
  )
}
