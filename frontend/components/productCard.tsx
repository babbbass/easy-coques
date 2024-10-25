import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { getOneProduct } from "@/api/fetchStrapi"

export async function ProductCard({ slug }: { slug: string }) {
  const product = await getOneProduct({ slug })

  console.log("slug", product)
  return (
    <Card>
      <CardHeader>
        <h1>{product.data.name}</h1>
      </CardHeader>
      <CardContent>
        <p>{product.data.description}</p>
        {product.data.image && (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${product.data.image.url}`}
            width={200}
            height={200}
            alt={product.data.name}
          />
        )}
      </CardContent>
    </Card>
  )
}
