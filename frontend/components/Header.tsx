import React from "react"
import Link from "next/link"
import { Separator } from "./separator"
import { ShoppingBagIcon } from "./cart/ShoppingBag"

export function Header() {
  return (
    <>
      <header>
        <nav className='flex w-full  justify-between items-center pt-6 max-w-7xl mx-auto text-lg'>
          <div>
            <Link href='/'>
              <span className='text-2xl font-bold italic'>
                Easy<span className='text-blue-600'>Coques</span>
              </span>
            </Link>
          </div>
          <div className='flex gap-4'>
            <Link href='/products/coques/iphone'>
              <span>nos coques</span>
            </Link>
            <Link href='/cart'>
              <span>panier</span>
            </Link>
          </div>
          <ShoppingBagIcon />
        </nav>
      </header>
      <Separator margin={5} />
    </>
  )
}
