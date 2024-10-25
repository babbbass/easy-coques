import qs from "qs"
type Resource = {
  resourceName: string
  sort?: string[]
  populate?: string[]
  fields?: string[]
  filters?: object
  pagination?: {
    pageSize: number
    page: number
  }
}
export async function fetchStrapi({
  resourceName,
  sort,
  populate,
  fields,
  filters,
  pagination, //= { pageSize: 100, page: 1 },
}: Resource) {
  const urlParams = qs.stringify({
    fields,
    populate,
    sort,
    filters,
    pagination,
  })
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/${resourceName}?${urlParams}`
  console.log("url", url)
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    })
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()
    return json
  } catch (error: unknown) {
    // @ts-expect-error next-line
    console.error(error.message)
  }
}

export async function getProducts({
  category,
}: {
  category: string | null | undefined
}) {
  const products = await fetchStrapi({
    resourceName: "products",
    sort: ["id:desc"],
    populate: ["image"],
    fields: ["id", "name", "description", "price", "slug"],
    filters: category
      ? {
          categories: {
            slug: { $eqi: category },
          },
        }
      : {},
  })
  console.log("products", products)
  return products
}

export async function getOneProduct({ slug }: { slug: string }) {
  const product = await fetchStrapi({
    resourceName: `products/${slug}`,
  })

  return product
}
