import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import Timer3d, { TimeToDateLabels } from '../Specials/Timer3d'
import { sendLeadbitForm, sendEmail, subscribe } from '../../lib/apiTwo'

type Props = {
  title: string
  price: string
  imageSrc: StaticImageData
  imageAlt: string
  labelName: string
  labelPhone: string
  placeholderName: string
  placeholderPhone: string
  labelsTimer: TimeToDateLabels
  btnTitle: string
  priceDiscount: string
  href: string
  setOpen: (open: boolean) => void
  setError: (error: boolean) => void
  setIsLoading: (isLoading: boolean) => void
  productCode: string
  country: string | undefined
}

export default function ContactOne(props: Props) {
  const {
    title,
    priceDiscount,
    price,
    imageSrc,
    imageAlt,
    labelName,
    labelPhone,
    placeholderName,
    placeholderPhone,
    btnTitle,
    setOpen,
    setError,
    setIsLoading,
    href,
    labelsTimer,
    productCode,
    country
  } = props
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [touched, setTouched] = useState({})
  const handleBlur = (e: any) => {
    setTouched({ ...touched, [e.target.name]: true })
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      setOpen(true)
      setIsLoading(true)
      const res = await subscribe({
        name,
        phone
      })

      if (res.message !== 'Success') {
        setError(true)
      }
    } catch (error) {
    } finally {
      setPhone('')
      setName('')
      setIsLoading(false)
    }
    setPhone('')
    setName('')
    //sendEmail({ name, phone, country, productCode })
  }
  return (
    <div id={href} className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
      {/* This element is to trick the browser into centering the modal contents. */}
      <span className="hidden md:inline-block md:h-screen md:align-middle" aria-hidden="true">
        &#8203;
      </span>
      <div className="flex w-full transform text-left text-base transition  md:max-w-2xl md:px-4 lg:max-w-4xl">
        <div className="relative flex w-full items-center overflow-hidden bg-white px-4  pb-8 shadow-2xl sm:pt-8 md:p-6 lg:p-8">
          <div className="grid w-full grid-cols-1 items-start gap-y-8 sm:grid-cols-12 lg:items-center ">
            <div className="aspect-w-2 aspect-h-2 lg:aspect-h-3 overflow-hidden rounded-lg bg-gray-100 col-span-4 lg:col-span-5">
              <Image src={imageSrc} alt={imageAlt} className="object-cover object-center" />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <div className="text-xl font-medium text-center text-gray-900 sm:pr-12">
                <h2>{title}</h2>
                <Timer3d labels={labelsTimer} />
                <div className="flex justify-center">
                  <p className="text-red-500 line-through"> {priceDiscount}</p>
                  <p className="font-medium text-xl"> / </p>
                  <p className="font-medium text-xl text-green-500">{price}</p>
                </div>
              </div>
              <section aria-labelledby="options-heading" className="mt-8">
                <h3 id="options-heading" className="sr-only">
                  Product options
                </h3>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="fname" className="block text-sm font-semibold leading-6 text-gray-900">
                    {labelName}
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    minLength={2}
                    autoComplete="given-name"
                    value={name}
                    onBlur={handleBlur}
                    onChange={e => {
                      setName(e.target.value)
                    }}
                    required
                    className="min-w-0 w-full flex-auto my-1 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    placeholder={placeholderName}
                  />
                  <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                    {labelPhone}
                  </label>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onBlur={handleBlur}
                    onChange={e => {
                      setPhone(e.target.value)
                    }}
                    required
                    className="min-w-0 w-full flex-auto my-1 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    placeholder={placeholderPhone}
                  />
                  <button
                    type="submit"
                    className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 py-3  text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    {btnTitle}
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
