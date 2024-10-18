import { create } from "zustand"
import { ProductType } from "@/utils/types/types"

const listProduct = [
  {
    id: "iPhone 15 Pro Max",
    name: "iPhone 15 Pro Max",
    price: 1199,
  },
  {
    id: "iPhone 15 Plus",
    name: "iPhone 15 Plus",
    price: 999,
  },
  {
    id: "iPhone 15 Pro",
    name: "iPhone 15 Pro",
    price: 899,
  },
  {
    id: "iPhone 15",
    name: "iPhone 15",
    price: 799,
  },
  {
    id: "iPhone 14 Pro Max",
    name: "iPhone 14 Pro Max",
    price: 1099,
  },
  {
    id: "iPhone 14 Pro",
    name: "iPhone 14 Pro",
    price: 1099,
  },
  {
    id: "iPhone 14 Plus",
    name: "iPhone 14 Plus",
    price: 849,
  },
]

const colors = [
  "Noir",
  "Bleu foncé",
  "Violet foncé",
  "Gris",
  "Vert",
  "Bleu clair",
]

type ProductStore = {
  products: ProductType[]
  product: ProductType
  color: string
  setProduct: (product: ProductType) => void
  addColor: (color: string) => void
}

export const useProductStore = create<ProductStore>((set) => ({
  products: listProduct,
  product: listProduct[0],
  color: colors[0],
  setProduct: (newProduct: ProductType) => {
    set({ product: newProduct })
  },
  addColor: (color: string) => {
    set({ color })
  },

  // fetchProducts: async () => {
  //   // Simulating an API call
  //   const response = await fetch("/api/products")
  //   const products = await response.json()
  //   set({ products })
  // },

  // updateProduct: (productId, updates) =>
  //   set((state) => ({
  //     products: state.products.map((p) =>
  //       p.id === productId ? { ...p, ...updates } : p
  //     ),
  //   })),
  // getProductById: (id) => get().products.find((p) => p.id === id),
  // getAllProducts: () => get().products,
}))
