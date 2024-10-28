"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const categories = [
  { value: "all", label: "Toutes les catégories" },
  { value: "air-max-90", label: "air-max-90" },
  { value: "air-max-90-swift", label: "air-max-90-swift" },
  { value: "air-force-1", label: "air-force-1" },
  { value: "air-max-one-bred", label: "air-max-one-bred" },
]

export function SelectCategory() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams?.get("category") || "all"

  const handleValueChange = (value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value === "all") {
      params.delete("category")
    } else {
      params.set("category", value)
    }
    router.push(`/products/trainers?${params.toString()}`)
  }

  return (
    <Select onValueChange={handleValueChange} defaultValue={currentCategory}>
      <SelectTrigger className='w-[200px]'>
        <SelectValue placeholder='Choisir une catégorie' />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem
            key={category.value}
            value={category.value}
            className='hover:bg-gray-100 cursor-pointer'
          >
            {category.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
