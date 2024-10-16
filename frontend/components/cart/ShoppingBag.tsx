"use client"
import { ShoppingBag } from "lucide-react"
import { useStoreCart } from "@/stores/cart.store"

export function ShoppingBagIcon() {
  const { items } = useStoreCart()
  const displayCount = items.length > 0 ? true : false

  console.log("items", items)
  return (
    <div className='relative'>
      <ShoppingBag className='cursor-pointer font-bold' />
      {displayCount && (
        <div className='absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-black text-white text-xs'>
          {items.length}
        </div>
      )}
    </div>
  )
}
