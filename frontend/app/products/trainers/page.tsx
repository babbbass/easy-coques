import { PageContainer } from "@/components/PageContainer"
import { ProductList } from "@/components/ProductList"
import { SelectCategory } from "@/components/SelectCategory"

export default function Trainers({
  searchParams,
}: {
  searchParams: { category: string | null | undefined }
}) {
  const category = searchParams.category || null

  return (
    <PageContainer>
      <div className='flex justify-start w-2/3 mb-6'>
        <SelectCategory />
      </div>
      <ProductList category={category} />
    </PageContainer>
  )
}
