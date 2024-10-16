import React from "react"
import { Star } from "lucide-react"
import { useProductStore } from "@/stores/product.store"

export function Description() {
  const { product } = useProductStore()
  return (
    <>
      <div className='font-bold text-4xl'>{product?.price}€</div>

      <p className='font-bold text-sm'>
        Coque antichoc magnétique de luxe pour iPhone, coque de charge sans fil
        Magsafe, armure translucide 256, 14, 13, 12, 11, 15 Pro Max Plus
      </p>
      <div className='flex gap-3 mt-4 items-center'>
        <div className='flex gap-0.5'>
          <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
          <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
          <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
          <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
          <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
        </div>
        <div className='font-bold text-sm'>4.8</div>
        <div className='text-sm'>53 Avis</div>
      </div>
    </>
  )
}
