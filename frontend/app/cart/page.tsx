import { Cart } from "@/components/Cart"
import React from "react"
import { Separator } from "@/components/separator"
import { TotalOrder } from "@/components/totalOrder"
import { ListProductCart } from "@/components/cart/ListProduct"
import { PageContainer } from "@/components/PageContainer"

export default function Page() {
  return (
    <PageContainer>
      <Cart />
      <Separator />
      <ListProductCart />
      <Separator />
      <TotalOrder />
    </PageContainer>
  )
}
