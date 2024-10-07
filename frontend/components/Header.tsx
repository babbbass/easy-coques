import React from "react"
import Link from "next/link"

export function Header() {
  return (
    <div className='flex w-full bg-gray-400 justify-between p-4 mb-6 max-w-7xl mx-auto'>
      <div>
        <Link href='/'>Logo</Link>
      </div>
      <div>Header</div>
      <div>Cart</div>
    </div>
  )
}
