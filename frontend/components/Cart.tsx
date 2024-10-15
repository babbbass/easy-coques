"use client"
import React from "react"
import { Button } from "./ui/button"
import { useStoreCart } from "@/stores/cart.store"

export function Cart() {
  const { getTotalPrice } = useStoreCart()
  return (
    <>
      <section className='flex flex-col gap-6 p-2'>
        <h1 className='text-3xl'>
          Le montant de vos achats est de {getTotalPrice()} €.
        </h1>
        <Button className='bg-blue-600 w-[40%] mx-auto'>
          Valider la commande
        </Button>
      </section>
    </>
  )
}
