"use client"
import { useSearchParams } from "next/navigation"
import { PageContainer } from "@/components/PageContainer"
import React from "react"
import { ProductList } from "@/components/ProductList"

export default function Trainers() {
  const urlParams = useSearchParams()
  const category = urlParams?.get("category")
  return (
    <PageContainer>
      <ProductList category={category} />
    </PageContainer>
  )
}
