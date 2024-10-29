"use client"
import React, { useState } from "react"
import { Separator } from "./separator"
import { CustomButton } from "@/components/customButton"
import { useStoreCart } from "@/stores/cart.store"
import { FREE_DELIVERY } from "@/utils/constants"
import { createOrder } from "@/api/fetchStrapi"

export function TotalOrder() {
  const { getTotalPrice, items } = useStoreCart()
  const [deliveryPrice] = useState(0)
  return (
    <section className='w-full flex justify-end'>
      <div className='px-2 flex flex-col text-xl font-normal justify-end items-end w-full md:w-2/3'>
        <div className='flex flex-col gap-2  w-full'>
          <small className='flex justify-between'>
            <span>Sous-total</span>
            <span>{getTotalPrice()}€</span>
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
            <span className='mr-[1px]'>{getTotalPrice() + deliveryPrice}</span>€
          </span>
        </div>
        <div className='w-full flex justify-end'>
          <CustomButton
            className='text-lg rounded-xl mt-8 !p-6 mx-0'
            textButton='Valider la commande'
            ariaLabel='Valider la commande'
            onClick={() => {
              createOrder(items)
            }}
          />
        </div>
      </div>
    </section>
  )
}
