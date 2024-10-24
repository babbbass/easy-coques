import { PageContainer } from "@/components/PageContainer"
import React from "react"
import Image from "next/image"

import { getProducts } from "@/api/fetchStrapi"

type Product = {
  id: string
  name: string
  description: string
  image?: {
    url: string
    width: number
  }
  price: number
}

export default async function Trainers() {
  const products = await getProducts({
    resourceName: "products",
    sort: ["id:desc"],
    populate: ["image"],
    fields: ["id", "name", "description", "price"],
    // filters: { price: { $gte: 0 } },
  })

  return (
    <PageContainer>
      {products.data.map((product: Product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          {product.image && (
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${product.image.url}`}
              width={200}
              height={200}
              alt={product.name}
            />
          )}
          <p>{product.price}€</p>
        </div>
      ))}
    </PageContainer>
  )
}
