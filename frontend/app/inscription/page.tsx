import { PageContainer } from "@/components/PageContainer"
import { PaymentForm } from "@/components/payment/PaymentForm"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default function Inscription() {
  const user = cookies().has("user_connected")

  if (user) redirect("/")
  return (
    <PageContainer>
      <PaymentForm />
    </PageContainer>
  )
}
