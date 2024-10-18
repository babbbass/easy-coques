"use client"
import { useState } from "react"
import { CirclePlus, MinusCircle } from "lucide-react"
import { CustomButton } from "@/components/customButton"
import clsx from "clsx"
import { useStoreCart } from "@/stores/cart.store"
import { useProductStore } from "@/stores/product.store"
import { useRouter } from "next/navigation"
//import { Products } from "@/types/product"

// type QuantityProps = {
//   product: Products
// }

export function Quantity() {
  const router = useRouter()
  const [quantity, setQuantity] = useState<number>(1)
  const { addItem } = useStoreCart()
  const { product, color } = useProductStore()
  // console.log("product", product, quantity)
  // console.log("items", items)
  return (
    <section className='flex gap-2 flex-col mt-4 items-center md:items-start'>
      <div className='flex gap-1 flex-col'>
        <h4 className='font-bold'>Quantité</h4>
        <div className='flex gap-2'>
          <MinusCircle
            className={clsx(`text-gray-500 cursor-pointer`, {
              "opacity-20 cursor-not-allowed": quantity === 1,
            })}
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
          />
          {quantity}{" "}
          <CirclePlus
            className={clsx(`text-gray-500 cursor-pointer`, {
              "opacity-20 cursor-not-allowed": quantity >= 5,
            })}
            onClick={() => setQuantity(quantity < 5 ? quantity + 1 : quantity)}
          />
        </div>
      </div>
      <div className='flex w-full items-center md:items-start flex-col'>
        <CustomButton
          textButton='Acheter maintenant'
          width={50}
          verticalMargin={4}
          className='h-10 font-bold border border-blue-600 hover:bg-slate-100 hover:text-blue-600 mb-0 mx-0'
          onClick={() => {
            const productToCard = {
              ...product,
              quantity: quantity,
              color: color,
            }
            addItem(productToCard)
            router.push("/cart/paiement")
          }}
        />
        <CustomButton
          aria-label='Ajouter au panier'
          textButton='Ajouter au panier'
          onClick={() => {
            const productToCard = {
              ...product,
              quantity: quantity,
              color: color,
            }
            addItem(productToCard)
          }}
          width={50}
          verticalMargin={4}
          className='h-10 bg-blue-600/30 text-blue-600 font-bold border hover:border-blue-600 hover:bg-slate-100 hover:text-blue-600 transition mx-0'
        />
      </div>
    </section>
  )
}
