export type ProductType = {
  id: string
  name: string
  description: string
  image: {
    name: string
    width: number
    url: string
  }
  price: number
  color?: string
  quantity: number
  priceUnit: number
  slug?: string
}

export type Products = ProductType[]
