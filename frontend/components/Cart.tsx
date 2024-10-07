import React from "react"
import { Button } from "./ui/button"

export function Cart() {
  return (
    <>
      <section className='flex flex-col gap-6 p-2'>
        <h1 className='text-3xl font-semibold'>
          Le montant total de votre Panier est de 59,00 €.
        </h1>
        <Button className='bg-blue-600 w-[40%] mx-auto'>
          Valider la commande
        </Button>
      </section>
    </>
  )
}
