import { create } from "zustand"

type Product = {
  id: string
  name: string
  price: number
  quantity: number
}

export type CartStoreProps = {
  products: Set<Product>
  addProduct: (product: Product) => void
}

export const useStoreCart = create<CartStoreProps>((set) => ({
  products: new Set(),
  addProduct: (product) =>
    set((state) => {
      const newProducts = new Set([...state.products, product])
      return { products: newProducts }
    }),
}))
