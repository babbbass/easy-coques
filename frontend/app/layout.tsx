import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

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

export const metadata: Metadata = {
  title: "E-commerce",
  description: "site e-commerce",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fr'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex-col items-center justify-center min-h-screen mx-auto p-20 pb-20 gap-16 sm:p-2 font-[family-name:var(--font-geist-sans)] bg-slate-50`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
