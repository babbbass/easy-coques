"use server"
import qs from "qs"
import { UserRegisterType, ResourceType } from "@/utils/types/types"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function fetchStrapi({
  resourceName,
  sort,
  populate,
  fields,
  filters,
  pagination,
  method = "GET",
  body,
  type = "content",
  authorizationToken = process.env.STRAPI_TOKEN,
}: ResourceType) {
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
      method,
      body:
        method === "POST"
          ? JSON.stringify(
              type === "content"
                ? {
                    data: body,
                  }
                : body
            )
          : undefined,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authorizationToken}`,
      },
    })
    if (!response.ok) {
      throw new Error(`Erreur Response status: ${response.status}`)
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
    fields: ["documentId", "name", "description", "price", "slug"],
    filters: category
      ? {
          categories: {
            slug: { $eqi: category },
          },
        }
      : {},
  })

  return products
}

export async function getOneProduct({ slug }: { slug: string }) {
  const product = await fetchStrapi({
    resourceName: `products/${slug}`,
  })

  return product
}

type orderLine = {
  documentId: string
  quantity: number
  price: number
}
export async function createOrder(products: orderLine[]) {
  console.log("createOrder", products)
  const user = await getUser()
  if (!user) {
    console.log("createOrder", "user is null")
    return
  }

  const orderLines = await Promise.all(
    products.map(async (product) => {
      const orderLine = await createOrderLine({
        product: product.documentId,
        quantity: product.quantity,
        price: product.price,
      })
      return orderLine
    })
  )
  console.log("createOrder --orderLines", orderLines)
  const order = await fetchStrapi({
    resourceName: `orders`,
    method: "POST",
    body: {
      user: user.id,
      order_lines: orderLines.map((orderLine) => orderLine.documentId),
      total_price: orderLines.reduce(
        (total, orderLine) => total + orderLine.total_price,
        0
      ),
    },
  })

  console.log("createOrder", order)
  if (!order) {
    console.log("createOrder", "order is null")
    return
  }
  redirect(`/cart/paiement`)
  //return order
}

type OrderLine = {
  product: string
  quantity: number
  price: number
}
export async function createOrderLine({ product, quantity, price }: OrderLine) {
  const createOrderLine = await fetchStrapi({
    resourceName: `order-lines`,
    method: "POST",
    body: {
      quantity,
      product,
      total_price: price * quantity,
    },
  })
  return createOrderLine.data
}

export async function registerUser(userData: UserRegisterType) {
  "use server"
  const { email, password, name } = userData
  const createUser = await fetchStrapi({
    resourceName: `auth/local/register`,
    type: "auth",
    method: "POST",
    body: {
      email,
      password,
      username: name,
    },
  })

  createUserCookie(createUser)
  return createUser
}

function createUserCookie(userData: { jwt: string }) {
  cookies().set({
    name: "user_connected",
    value: userData.jwt,
    maxAge: 60 * 60 * 24 * 1,
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  })
}

export async function loginUser(userData: { email: string; password: string }) {
  "use server"
  const { email, password } = userData
  const loginUser = await fetchStrapi({
    resourceName: `auth/local`,
    type: "auth",
    method: "POST",
    body: {
      identifier: email,
      password,
    },
  })

  createUserCookie(loginUser)

  return loginUser
}

export async function ifUserExists(email: string) {
  const user = await fetchStrapi({
    resourceName: `users`,
    fields: ["email"],
    filters: {
      email: {
        $eqi: email,
      },
    },
  })

  return user.length > 0
}

export async function disconnectedUser(pathname: string) {
  // "use server"
  console.log("disconnectedUser")
  cookies().delete("user_connected")
  redirect(`${pathname}`)
}

export async function getUser() {
  const cookieStore = cookies()
  const userCookie = cookieStore.get("user_connected")

  if (!userCookie) return null
  const user = await fetchStrapi({
    resourceName: `users/me`,
    fields: ["email", "username"],
    authorizationToken: userCookie?.value,
  })

  return {
    username: user.username,
    id: user.documentId,
  }
}
