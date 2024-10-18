"use client"
import React, { useState } from "react"
import Link from "next/link"
import { Separator } from "./separator"
import { ShoppingBagIcon } from "./cart/ShoppingBag"
import { MenuIcon } from "lucide-react"
import { Logo } from "@/components/Logo"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header>
        <nav className='flex w-full justify-between items-center pt-6 max-w-7xl mx-auto text-lg md:text-xl'>
          <Logo />
          <div className='flex items-center justify-between'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='md:hidden block text-gray-600 z-50 cursor-pointer'
            >
              <MenuIcon />
            </button>
          </div>
          <div
            className={`flex pt-10 flex-1 flex-col items-center gap-4 w-3/4 fixed top-0 left-0 h-full bg-slate-50 shadow-lg z-10 transform transition-transform duration-300 ease-in-out 
                      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                      md:static md:transform-none md:translate-x-0 md:flex md:gap-4 md:flex-row md:justify-end md:pt-0  md:shadow-none`}
          >
            <Link href='/' className='md:hidden'>
              <span className='text-xl md:text-2xl font-bold italic'>
                Easy<span className='text-blue-600'>Coques</span>
              </span>
            </Link>
            <Link href='/products/coques/iphone'>
              <span>nos coques</span>
            </Link>
            <Link href='/cart'>
              <span>panier</span>
            </Link>
            <ShoppingBagIcon />
          </div>
        </nav>
      </header>
      <Separator margin={5} />
    </>
  )
}
