import React from "react"
import Image from "next/image"
import { Star, Check } from "lucide-react"
export function Reviews() {
  return (
    <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
      <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
        <div className='flex gap-0.5 mb-2'>
          <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
          <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
          <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
          <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
          <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
        </div>
        <div className='text-lg leading-8'>
          <p>
            {`"La livraison est super rapide, la housse protège le téléphone et même les lentilles de la caméra sont arrivées rapidement, les couleurs sont belles`}{" "}
            <span className='p-0.5 bg-slate-800 text-white'>
              {`il ne se tache pas`}
            </span>
            {`, je suis satisfait de mon achat"`}
          </p>
        </div>
        <div className='flex gap-4 mt-2'>
          <Image
            width={20}
            height={20}
            className='rounded-full h-12 w-12 object-cover'
            src='/users/user-1.png'
            alt='user'
          />
          <div className='flex flex-col'>
            <p className='font-semibold'>Jonathan</p>
            <div className='flex gap-1.5 items-center text-zinc-600'>
              <Check className='h-4 w-4 stroke-[3px] text-blue-600' />
              <p className='text-sm'>Achat Vérifié</p>
            </div>
          </div>
        </div>
      </div>

      {/* second user review */}
      <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
        <div className='flex gap-0.5 mb-2'>
          <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
          <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
          <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
          <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
          <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
        </div>
        <div className='text-lg leading-8'>
          <p>
            {`"Parfait, arrivé en peu de temps, de la couleur que je voulais
                et s'adapte merveilleusement à mon iPhone 14 Pro. Très satisfait
                et recommande ce produit et vendeur, sérieux fiable et sûr.`}{" "}
            <span className='p-0.5 bg-slate-800 text-white'>
              {`a l'air tout neuf après environ six mois"`}
            </span>
          </p>
        </div>
        <div className='flex gap-4 mt-2'>
          <Image
            width={20}
            height={20}
            className='rounded-full h-12 w-12 object-cover'
            src='/users/user-4.jpg'
            alt='user'
          />
          <div className='flex flex-col'>
            <p className='font-semibold'>Josh</p>
            <div className='flex gap-1.5 items-center text-zinc-600'>
              <Check className='h-4 w-4 stroke-[3px] text-blue-600' />
              <p className='text-sm'>Achat Vérifié</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
