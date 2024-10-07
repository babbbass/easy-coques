import React from "react"
import Link from "next/link"
import { Newsletter } from "./newsletter"

export function Footer() {
  return (
    <footer className=' flex flex-col w-full gap-6 mt-4 bg-gray-400 justify-between p-4 mb-6 max-w-7xl mx-auto'>
      <Newsletter />
      <div className='flex justify-between text-xs'>
        <div>
          <Link href='/'>Logo</Link>
        </div>
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
        {/* <small>
          Realisé by{" "}
          <Link href={"https://www.linkedin.com/in/sebastien-savan-76597040/"}>
            @babbbass
          </Link>
        </small> */}
      </div>
    </footer>
  )
}
