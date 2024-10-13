import { Colors } from "@/components/Colors"
import { Model } from "@/components/Model"
import { PageContainer } from "@/components/PageContainer"
import { PhotoSlider } from "@/components/PhotoSlider"
import { Separator } from "@/components/separator"
import { Star, GlobeLock, Truck, Handshake } from "lucide-react"

export default function Iphone() {
  return (
    <PageContainer>
      <div className='flex w-full'>
        <PhotoSlider />
        <div className='flex flex-col flex-1 gap-2'>
          <div className='font-bold text-4xl'>14,99€</div>

          <p className='font-bold text-sm'>
            Coque antichoc magnétique de luxe pour iPhone, coque de charge sans
            fil Magsafe, armure translucide 256, 14, 13, 12, 11, 15 Pro Max Plus
          </p>
          <div className='flex gap-3 mt-4 items-center'>
            <div className='flex gap-0.5'>
              <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
              <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
              <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
              <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
              <Star className='h-4 w-4 text-sky-600 fill-sky-600' />
            </div>
            <div className='font-bold text-sm'>4.8</div>
            <div className='text-sm'>53 Avis</div>
          </div>
          <Separator margin={4} />
          <Model />
          <Colors />
          <Separator margin={4} />
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
                  Nous respectons votre vie privée afin que vos données
                  personnelles soient en sécurité.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
