import React from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
export function Newsletter() {
  return (
    <section className='flex flex-col gap-6 p-2 justify-center items-center'>
      <h2 className='text-3xl font-semibold'>Inscription à la newsletter</h2>
      <Input placeholder='Rentrez votre email...' className='md:w-3/4' />
      <Button className='bg-blue-600 w-[25%] mx-auto rounded-full'>{`S'inscrire`}</Button>
    </section>
  )
}
