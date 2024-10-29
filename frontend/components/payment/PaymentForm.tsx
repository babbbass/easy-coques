"use client"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { registerUser, ifUserExists } from "@/api/fetchStrapi"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PaymentDetail } from "@/components/payment/PaymentDetail"
import { CustomButton } from "@/components/customButton"
import { useUserStore } from "@/stores/user.store"

const formSchema = z.object({
  email: z.coerce.string().email().min(5, {
    message: "Username must be at least 2 characters.",
  }),
  firstName: z.string().min(3, {
    message: "Votre prénom doit avoir au moins 3 caractères.",
  }),
  name: z.string().min(3, {
    message: "Votre nom doit avoir au moins 3 caractères.",
  }),
  password: z.string().min(6, {
    message: "Le mot de passe doit avoir au moins 6 caractères.",
  }),
  // address: z.string().min(3, {
  //   message: "Votre rue doit avoir au moins 3 caractères.",
  // }),
  // postCode: z.string().min(5, {
  //   message: "Votre code postal doit avoir au moins 5 caractères.",
  // }),
  // city: z.string().min(3, {
  //   message: "Votre prénom doit avoir au moins 3 caractères.",
  // }),
})
export function PaymentForm() {
  // const router = useRouter()
  const { setUser } = useUserStore()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    //console.log(values)
    const user = await ifUserExists(values.email)
    //console.log(user)
    if (user) {
      console.log("user exists")
      return
    }

    const userCreated = await registerUser(values)

    if (userCreated) {
      setUser(userCreated)
    }
  }

  return (
    <div className='bg-transparent flex flex-col gap-1 border-0 w-full'>
      <h2 className='w-full text-center text-xl mb-6 md:text-3xl'>
        {" "}
        Créer un compte
      </h2>

      <div className='w-full flex gap-2 justify-center'>
        <Card className='border-t-1 border-t-slate-300 p-4 bg-transparent w-min-[310px] sm:w-auto'>
          <CardContent className='p-0 '>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'
              >
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <>
                      <FormItem className='mb-14'>
                        <FormControl>
                          <Input placeholder='Entrez votre email' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />
                <div className='flex justify-between gap-4'>
                  <FormField
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder='Entrez votre prénom' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder='Entrez votre nom' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder='votre mot de passe' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* <FormField
                  control={form.control}
                  name='address'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder='Numéro et nom de rue' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className='flex gap-4'>
                  <FormField
                    control={form.control}
                    name='postCode'
                    render={({ field }) => (
                      <FormItem className='w-1/4'>
                        <FormControl>
                          <Input placeholder='code postal' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='city'
                    render={({ field }) => (
                      <FormItem className='flex-1'>
                        <FormControl>
                          <Input placeholder='Entrez votre ville' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <PaymentDetail form={form} /> */}

                <div className='w-full flex justify-end'>
                  <CustomButton
                    type='button'
                    textButton='Retour à mes achats'
                    // onClick={() => router.push("/")}
                    className='rounded-lg m-0 bg-slate-800 mr-2 w-fit border-slate-800'
                  />
                  <CustomButton
                    type='submit'
                    textButton='Payer'
                    className='rounded-lg m-0'
                  />
                </div>
                <p className='mt-5 text-right'>
                  Déjà inscrit?{" "}
                  <Link
                    href={"/connexion"}
                    className='text-blue-600 hover:underline font-semibold'
                  >
                    {`Se connecter`}{" "}
                  </Link>
                </p>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
