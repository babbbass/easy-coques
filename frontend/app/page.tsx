import { ListProducts } from "@/components/listProducts"

async function getProducts() {
  const url = "http://localhost:1337/api/products"
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()
    // console.log(json.data)
    return json
  } catch (error) {
    console.error(error.message)
  }
}

export default async function Home() {
  const products = await getProducts()
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <h1 className='text-4xl font-bold'>Bienvenue sur Coconuts</h1>
      <p className='text-xl'>This is the homepage</p>
      <p>
        <ListProducts products={products.data} />
      </p>
    </div>
  )
}
