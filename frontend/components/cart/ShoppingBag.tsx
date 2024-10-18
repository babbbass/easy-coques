"use client"
import { ShoppingBag } from "lucide-react"
import { useStoreCart } from "@/stores/cart.store"

export function ShoppingBagIcon({ className }: { className?: string }) {
  const { items } = useStoreCart()
  const displayCount = items.length > 0 ? true : false
  console.log("displayCount", className)

  return (
    <div className='relative'>
      <ShoppingBag className={`cursor-pointer font-bold ${className}`} />
      {displayCount && (
        <div
          className={`absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white text-xs`}
        >
          {items.length}
        </div>
      )}
    </div>
  )
}
