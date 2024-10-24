import { CustomButton } from "@/components/customButton"
// import { ListProducts } from "@/components/listProducts"
import { VideoPlayer } from "@/components/videoPlayer"
import { Icons } from "@/components/Icons"
import { Check } from "lucide-react"
import { PageContainer } from "@/components/PageContainer"
import Link from "next/link"
import { OverallReviews } from "@/components/Reviews/OverallReviews"
import { Reviews } from "@/components/Reviews/Reviews"

export default async function Home() {
  return (
    <PageContainer>
      <div className='flex flex-col w-full max-w-7xl mx-auto items-center justify-items-center min-h-screen md:p-6 font-[family-name:var(--font-geist-sans)]'>
        <h1 className='text-xl md:text-4xl font-bold mb-10'>EasyCoques</h1>
        {/* <ListProducts products={products.data} /> */}
        <div className='flex flex-col gap-4 w-full text-lg md:text-2xl leading-9'>
          <p className=''>
            Découvrez nos coques{" "}
            <span className='bg-sky-600 text-white font-bold px-1'>
              antichocs et magnétiques
            </span>{" "}
            translucides alliant luxe et robustesse,{" "}
            <span className='bg-sky-600 text-white font-bold px-1'>
              compatibles MagSafe
            </span>{" "}
            pour une charge sans fil simplifiée.
          </p>
          <p>
            Disponible pour tous les modèles : iPhone 11 à 15 Pro Max Plus 256.
            Achetez maintenant et offrez le meilleur à votre smartphone!
          </p>
        </div>

        <ul className='my-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start md:text-lg'>
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
        <VideoPlayer />
        <Link
          href='/products/coques/iphone'
          className='w-full text-center my-2 md:my-4'
        >
          <CustomButton
            textButton='Commandez Maintenant'
            width={33}
            verticalMargin={4}
            className='w-auto md:w-[33%]'
          />
        </Link>

        <section className='bg-slate-100 grainy-dark py-5 items-center'>
          <div className='flex flex-col lg:flex-row items-center gap-4 mb-8'>
            <h2 className='order-1 mt-2 w-full tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
              Ce que disent
              <span className='relative px-2'>
                nos clients{" "}
                <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-blue-600' />
              </span>{" "}
            </h2>
          </div>
          <OverallReviews />
          <Reviews />
          {/* <div className='md:pt-16'><Reviews /></div> */}
        </section>
        {/* <CustomButton textButton='Commandez Maintenant' /> */}
      </div>
    </PageContainer>
  )
}
