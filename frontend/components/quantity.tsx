"use client"
import { useState } from "react"
import { CirclePlus, MinusCircle } from "lucide-react"
import { CustomButton } from "@/components/customButton"
import clsx from "clsx"
import { useStoreCart } from "@/stores/cart.store"
import { ProductType } from "@/utils/types/types"
// import { useProductStore } from "@/stores/product.store"
// import { useRouter } from "next/navigation"
//import { Products } from "@/types/product"

// type QuantityProps = {
//   product: Products
// }

export function Quantity({ product }: { product: ProductType }) {
  // const router = useRouter()
  const [quantity, setQuantity] = useState<number>(1)
  const { addItem } = useStoreCart()
  const productToCard = {
    ...product,
    quantity: quantity,
    // color: color,
    id: product.id,
    price: product.price * quantity,
    priceUnit: product.price,
  }
  return (
    <section className='flex gap-2 flex-col mt-4 items-center'>
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
      <div className='flex w-full items-center flex-col'>
        {/* <CustomButton
          textButton='Acheter maintenant'
          width={50}
          verticalMargin={4}
          className='h-10 font-bold border border-blue-600 hover:bg-slate-100 hover:text-blue-600 mb-0 mx-0'
          onClick={() => {
            addItem(productToCard)
            router.push("/cart/paiement")
          }}
        /> */}
        <CustomButton
          aria-label='Ajouter au panier'
          textButton='Ajouter au panier'
          onClick={() => {
            addItem(productToCard)
          }}
          // width={50}
          verticalMargin={4}
          className='h-10 bg-blue-600/30 text-blue-600 font-bold border hover:border-blue-600 hover:bg-slate-100 hover:text-blue-600 transition mx-0'
        />
      </div>
    </section>
  )
}
