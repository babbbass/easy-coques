import { getProducts } from "@/api/fetchStrapi"
import Link from "next/link"
import Image from "next/image"

type Product = {
  id: string
  name: string
  description: string
  image?: {
    url: string
    width: number
  }
  price: number
  slug: string
}

export async function ProductList({
  category,
}: {
  category: string | null | undefined
}) {
  const products = await getProducts({ category })

  return (
    <>
      {products.data.map((product: Product) => (
        <Link key={product.id} href={`/products/trainers/${product.slug}`}>
          <div>
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
        </Link>
      ))}
    </>
  )
}
