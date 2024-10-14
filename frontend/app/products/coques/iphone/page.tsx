import { Colors } from "@/components/Colors"
import { Model } from "@/components/Model"
import { PageContainer } from "@/components/PageContainer"
import { PhotoSlider } from "@/components/PhotoSlider"
import { Description } from "@/components/product/description"
import { Quantity } from "@/components/quantity"
import { Separator } from "@/components/separator"
import { GlobeLock, Truck, Handshake } from "lucide-react"

const product = [
  {
    id: "iphone-14",
    name: "iPhone 14",
    price: 799,
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    price: 799,
  },
]

export default function Iphone() {
  return (
    <PageContainer>
      <div className='flex w-full'>
        <PhotoSlider />
        <div className='flex flex-col flex-1 gap-2'>
          <Description />
          <Separator margin={4} />
          <Model />
          <Colors />
          <Separator margin={4} />
          <Quantity />
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
