import { getProducts } from "@/api/fetchStrapi"
import Link from "next/link"
import Image from "next/image"
// import { createOrder } from "@/api/fetchStrapi"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quantity } from "./quantity"
import { ProductType } from "@/utils/types/types"

export async function ProductList({
  category,
}: {
  category: string | null | undefined
}) {
  const products = await getProducts({ category })
  // await createOrder([
  //   {
  //     id: products.data[0].id,
  //     quantity: 1,
  //     price: products.data[0].price,
  //   },
  //   {
  //     id: products.data[2].id,
  //     quantity: 2,
  //     price: products.data[2].price,
  //   },
  // ])

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {products.data.map((product: ProductType) => (
        <Card key={product.id} className='flex flex-col w-60 items-center'>
          <Link href={`/products/trainers/${product.slug}`}>
            <CardHeader className='text-center'>
              <h1 className='text-2xl text-blue-600 font-bold'>
                {product.name.toUpperCase()}
              </h1>
            </CardHeader>
            <CardContent className='flex flex-col gap-3 justify-center items-center'>
              <p className='italic'>{product.description}</p>
              {product.image && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${product.image.url}`}
                  width={200}
                  height={200}
                  alt={product.name}
                />
              )}
              <p className='font-bold text-center'>{product.price}€</p>
            </CardContent>
          </Link>
          <div className='w-full justify-center flex'>
            <Quantity product={product} />
          </div>
        </Card>
      ))}
    </div>
  )
}
