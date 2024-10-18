import React from "react"
import { PaymentForm } from "@/components/PaymentForm"
import { PageContainer } from "@/components/PageContainer"
export default function Page() {
  return (
    <PageContainer>
      <h1 className='text-5xl text-blue-600 mb-10'>PAIEMENT</h1>
      <PaymentForm />
    </PageContainer>
  )
}
