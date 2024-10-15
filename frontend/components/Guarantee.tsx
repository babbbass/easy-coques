import React from "react"
import { GlobeLock, Handshake, Truck } from "lucide-react"

export function Guarantee() {
  return (
    <div className='flex gap-2 flex-col'>
      <h3 className='font-bold'>{`L'assurance EasyCoques`}</h3>
      <div className='flex gap-2 items-center'>
        <Truck className='text-blue-600' />
        <p className='text-sm'>
          <span className='font-medium mr-2'>Livraison gratuite</span>
          <span className='text-gray-600/90'>
            Livraison gratuite à partir de 10€.
          </span>
        </p>
      </div>
      <div className='flex gap-2 items-center'>
        <GlobeLock className='text-blue-600' />
        <p className='text-sm'>
          <span className='font-medium mr-2'>Paiements sécurisés</span>
          <span className='text-gray-600/90'>
            Méthodes de paiement utilisées par de nombreuses marques.
          </span>
        </p>
      </div>
      <div className='flex gap-2 items-center'>
        <Handshake className='text-blue-600' />
        <p className='text-sm'>
          <span className='font-medium mr-2'>Sécurité et vie privée</span>
          <span className='text-gray-600/90'>
            Nous respectons votre vie privée afin que vos données personnelles
            soient en sécurité.
          </span>
        </p>
      </div>
    </div>
  )
}
