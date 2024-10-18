import { CustomButton } from "@/components/customButton"
// import { ListProducts } from "@/components/listProducts"
import { VideoPlayer } from "@/components/videoPlayer"
import { Icons } from "@/components/Icons"
import { Check, Star } from "lucide-react"
import { PageContainer } from "@/components/PageContainer"
import Image from "next/image"
import Link from "next/link"
// async function getProducts() {
//   const url = "http://localhost:1337/api/products"
//   try {
//     const response = await fetch(url)
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`)
//     }

//     const json = await response.json()
//     return json
//   } catch (error) {
//     console.error(error.message)
//   }
// }

export default async function Home() {
  // const products = await getProducts()
  return (
    <PageContainer>
      <div className='flex flex-col w-full max-w-7xl mx-auto items-center justify-items-center min-h-screen md:p-6 font-[family-name:var(--font-geist-sans)]'>
        <h1 className='text-xl md:text-4xl font-bold mb-10'>
          Protégez votre Téléphone avec Classe
        </h1>
        {/* <ListProducts products={products.data} /> */}
        <div className='flex flex-col gap-4 w-full text-lg md:text-2xl leading-9'>
          <p className=''>
            Découvrez nos coques{" "}
            <span className='bg-sky-600 text-white font-bold px-1'>
              antichocs et magnétiques
            </span>{" "}
            translucides Alliant luxe et robustesse,{" "}
            <span className='bg-sky-600 text-white font-bold px-1'>
              compatibles MagSafe
            </span>{" "}
            pour une charge sans fil simplifiée.
          </p>
          <p>
            Disponible pour tous les modèles : iPhone 11 à 16 Pro Max Plus 256.
            Achetez Maintenant et Offrez le Meilleur à Votre Smartphone !
          </p>
        </div>
        <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start md:text-lg'>
          <div className='space-y-2'>
            <li className='flex gap-1.5 items-center text-left'>
              <Check className='h-5 w-5 shrink-0 text-sky-600' />
              Haute qualité, materiau resistant
            </li>
            <li className='flex gap-1.5 items-center text-left'>
              <Check className='h-5 w-5 shrink-0 text-sky-600' />5 ans garantie
            </li>
            <li className='flex gap-1.5 items-center text-left'>
              <Check className='h-5 w-5 shrink-0 text-sky-600' />
              Coques pour derniers modeles de iPhone
            </li>
          </div>
        </ul>
        <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
          <div className='flex -space-x-4'>
            <Image
              width={20}
              height={20}
              className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
              src='/users/user-1.png'
              alt='user image'
            />
            <Image
              width={20}
              height={20}
              className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
              src='/users/user-2.png'
              alt='user image'
            />
            <Image
              width={20}
              height={20}
              className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
              src='/users/user-3.png'
              alt='user image'
            />
            <Image
              width={20}
              height={20}
              className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
              src='/users/user-4.jpg'
              alt='user image'
            />
            <Image
              width={20}
              height={20}
              className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
              src='/users/user-5.jpg'
              alt='user image'
            />
          </div>
          <div className='flex flex-col justify-between items-center sm:items-start'>
            <div className='flex gap-0.5'>
              <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
              <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
              <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
              <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
              <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
            </div>

            <p>
              <span className='font-semibold'>1.250</span> clients statisfaits
            </p>
          </div>
        </div>
        <Link href='/products/coques/iphone'>
          <CustomButton
            textButton='Commandez Maintenant'
            width={33}
            verticalMargin={4}
            className='w-auto md:w-[33%]'
          />
        </Link>
        <VideoPlayer />
        {/* <CustomButton textButton='Commandez Maintenant' width={33} /> */}
        <section className='bg-slate-100 grainy-dark py-5 items-center'>
          {/* <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'> */}
          <div className='flex flex-col lg:flex-row items-center gap-4 mb-8'>
            <h2 className='order-1 mt-2 w-full tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
              Ce que disent
              <span className='relative px-2'>
                nos clients{" "}
                <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-blue-600' />
              </span>{" "}
            </h2>
          </div>

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
          {/* <div className='md:pt-16'><Reviews /></div> */}
        </section>
        {/* <CustomButton textButton='Commandez Maintenant' /> */}
      </div>
    </PageContainer>
  )
}
