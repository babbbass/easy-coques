"use client"
import React from "react"
import { useStoreCart } from "@/stores/cart.store"
import { CustomButton } from "./customButton"
import Link from "next/link"

export function Cart() {
  const { getTotalPrice } = useStoreCart()
  return (
    <>
      <section className='flex flex-col gap-6 p-2'>
        <h1 className='text-3xl'>
          Le montant de vos achats est de {getTotalPrice()} €.
        </h1>
        <Link href='/cart/paiement' className='text-center'>
          <CustomButton
            textButton='Valider la commande'
            width={50}
            ariaLabel='Valider la commande'
            className='my-1'
          />
        </Link>
      </section>
    </>
  )
}
