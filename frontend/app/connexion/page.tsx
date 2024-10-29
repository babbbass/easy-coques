import React from "react"
import { PageContainer } from "@/components/PageContainer"
import { SignInForm } from "@/components/SignInForm"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default function Connexion() {
  const user = cookies().has("user_connected")
  if (user) redirect("/")

  return (
    <PageContainer>
      <SignInForm />
    </PageContainer>
  )
}
