import { Guarantee } from "@/components/Guarantee"
import { PageContainer } from "@/components/PageContainer"
import { PhotoSlider } from "@/components/PhotoSlider"
import Product from "@/components/product/Product"
import { Separator } from "@/components/separator"

export default function Iphone() {
  return (
    <PageContainer>
      <div className='flex w-full flex-col md:flex-row gap-4'>
        <PhotoSlider />
        <div className='flex flex-col flex-1 gap-2'>
          <Product />
          <Separator margin={4} />
          <Guarantee />
        </div>
      </div>
    </PageContainer>
  )
}
