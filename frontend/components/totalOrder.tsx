"use client"
import React, { useState } from "react"
import { Separator } from "./separator"
import { Button } from "./ui/button"
import { useStoreCart } from "@/stores/cart.store"
import { FREE_DELIVERY } from "@/utils/constants"

export function TotalOrder() {
  const { getTotalPrice } = useStoreCart()
  const [deliveryPrice] = useState(0)
  return (
    <section className='w-full flex justify-end  '>
      <div className='px-2 flex flex-col text-xl font-normal justify-end items-end w-2/3'>
        <div className='flex flex-col gap-2  w-full'>
          <small className='flex justify-between'>
            <span>Sous-total</span>
            <span>{getTotalPrice()} €</span>
          </small>
          <small className='flex justify-between'>
            <span>Livraison</span>
            <span>
              {deliveryPrice
                ? `${deliveryPrice} €`
                : `${FREE_DELIVERY.toUpperCase()}`}
            </span>
          </small>
        </div>
        <Separator margin={5} />
        <div className='flex justify-between w-full font-semibold'>
          <span>Total</span>
          <span>
            <span className='font-normal text-xs mr-2'>TVA incluse</span>{" "}
            {getTotalPrice() + deliveryPrice} €
          </span>
        </div>
        <div className='w-full flex justify-end'>
          <Button className='bg-blue-600 w-[65%] text-lg py-8 rounded-xl mt-8'>{`Valider la commande`}</Button>
        </div>
      </div>
    </section>
  )
}
