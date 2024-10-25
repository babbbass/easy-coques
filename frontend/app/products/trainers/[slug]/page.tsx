import React from "react"
import { PageContainer } from "@/components/PageContainer"
import { ProductCard } from "@/components/productCard"
export default function Product({ params }: { params: { slug: string } }) {
  const slug = params.slug
  return (
    <PageContainer>
      <ProductCard slug={slug} />
    </PageContainer>
  )
}
