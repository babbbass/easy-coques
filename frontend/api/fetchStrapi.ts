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
export async function getProducts({
  resourceName,
  sort,
  populate,
  fields,
  filters,
  pagination = { pageSize: 100, page: 1 },
}: Resource) {
  const urlParams = qs.stringify({
    fields,
    populate,
    sort,
    filters,
    pagination,
  })
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/${resourceName}?${urlParams}`

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
    // console.log("response", response.json())
    const json = await response.json()
    return json
  } catch (error: unknown) {
    console.error(error.message)
  }
}
