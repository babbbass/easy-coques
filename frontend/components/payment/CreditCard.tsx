import React from "react"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"

export function CreditCard({ form }) {
  return (
    <div className='flex flex-col gap-2 h-40 pt-5'>
      <div className='flex gap-4'>
        <FormField
          control={form.control}
          name='cardNumber'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormLabel>Numéro de carte</FormLabel>
              <FormControl>
                <Input placeholder='1234 1234 1234 1234' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='flex gap-4'>
        <FormField
          control={form.control}
          name='expirationCard'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormControl>
                <Input placeholder='MM/YY' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='CVC'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormControl>
                <Input placeholder='CVC' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='flex gap-4'>
        <FormField
          control={form.control}
          name='Pays'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormControl>
                <Input placeholder='Pays de votre Banque' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}
