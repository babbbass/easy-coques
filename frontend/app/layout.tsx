import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Inter } from "next/font/google"
import { getUser } from "@/api/fetchStrapi"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vente de coques pas cher | EasyCoques",
  description:
    "Découvrez notre gamme de coques à prix réduit. Livraison gratuite !",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await getUser()

  return (
    <html lang='fr'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased flex-col items-center justify-center min-h-screen mx-auto p-2 md:px-5 gap-16 font-[family-name:var(--font-geist-sans)] bg-slate-50`}
      >
        <Header user={user} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
