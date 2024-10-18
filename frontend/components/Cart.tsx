"use client"
import React from "react"
import { useStoreCart } from "@/stores/cart.store"
import { CustomButton } from "./customButton"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Cart() {
  const router = useRouter()
  const { getTotalPrice } = useStoreCart()
  return (
    <>
      <section className='flex w-full text-center flex-col gap-6 p-2'>
        <h1 className='text-lg sm:text-xl md:text-3xl'>
          <span className='mr-[1px]'>
            Total de vos achats: {getTotalPrice()}
          </span>
          €
        </h1>
        <Link href='/cart/paiement' className='text-center'>
          <CustomButton
            textButton='Valider la commande'
            ariaLabel='Valider la commande'
            className='my-1 rounded-xl'
            onClick={() => router.push("/cart/paiement")}
          />
        </Link>
      </section>
    </>
  )
}
