import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CreditCard } from "./CreditCard"
import clsx from "clsx"
import { CreditCardIcon } from "lucide-react"
import { GooglePay } from "./GooglePay"

//eslint-disable-next-line
export function PaymentDetail({ form }: { form: any }) {
  const [paymentMethod, setPaymentMethod] = useState<string>("card")
  const handleButtonClick = (value: string) => {
    setPaymentMethod(value)
  }
  return (
    <div className='flex flex-col gap-2 '>
      <h4 className='font-semibold text-left'>Informations de paiement</h4>
      <div className='flex gap-3 justify-around flex-wrap'>
        <div>
          <Button
            type='button'
            onClick={() => handleButtonClick("card")}
            className={clsx(
              `rounded bg-transparent border border-slate-300 text-gray-400 text-sm shadow-sm hover:bg-blue-600/10 hover:text-blue-600`,
              {
                "text-blue-600 border-blue-600": paymentMethod === "card",
              }
            )}
          >
            <CreditCardIcon className='mr-2' />
            Carte Bancaire
          </Button>
        </div>
        <div>
          <Button
            type='button'
            onClick={() => handleButtonClick("googlePay")}
            className={clsx(
              `rounded bg-transparent border-slate-500 text-gray-400 text-sm px-3 hover:bg-blue-600/10 hover:text-blue-600`,
              {
                "text-blue-600 border border-blue-600":
                  paymentMethod === "googlePay",
              }
            )}
          >
            <span
              className={clsx(`rounded-2xl border px-3 mr-2`, {
                "border-blue-600": paymentMethod === "googlePay",
              })}
            >
              pay
            </span>
            Google Pay
          </Button>
        </div>
      </div>
      {paymentMethod === "googlePay" ? (
        <GooglePay />
      ) : (
        <CreditCard form={form} />
      )}
    </div>
  )
}
