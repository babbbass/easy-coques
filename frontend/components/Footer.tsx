import React from "react"
import Link from "next/link"
import { Newsletter } from "./newsletter"
import { Separator } from "./separator"
import { Logo } from "@/components/Logo"

export function Footer() {
  return (
    <>
      <Separator />
      <footer
        className='flex flex-col w-full gap-6 mt-4 justify-between px-2 
      mb-0 md:mb-6 max-w-7xl mx-auto'
      >
        <Newsletter />
        <div className='flex justify-between text-xs'>
          <Logo />
          <div>
            <ul className='flex flex-col  gap-4'>
              <li>Nous Contacter</li>
              <li>Termes et conditions</li>
              <li>Politiques de confidentialité</li>
            </ul>
          </div>
        </div>
        <div className='text-center'>
          <small>
            Copyright © 2024 MySite. Tous droits réservés. Realisé by{" "}
            <Link
              className='underline'
              href={"https://www.linkedin.com/in/sebastien-savan-76597040/"}
            >
              @babbbass
            </Link>
          </small>
        </div>
      </footer>
    </>
  )
}
