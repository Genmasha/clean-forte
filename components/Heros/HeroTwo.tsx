import React from 'react'
import Image, { StaticImageData } from 'next/image'
import ScrollLink from '../Specials/ScrollLink'
import Typewriter from 'typewriter-effect'

type Props = {
  title: string
  description: string
  button: string
  imageSrc: StaticImageData
}

export default function HeroTwo(props: Props) {
  const { title, description, button, imageSrc } = props

  return (
    <div className="bg-white">
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Image src={imageSrc} alt="product image" className="h-full w-full object-cover object-center" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-70" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">{title}</h1>
          <p className="mt-4 text-xl text-white">{description}</p>
          <ScrollLink href="#contact">
            <button className="mt-8 inline-block rounded-md border border-transparent bg-red-700 py-3 px-8 text-lg font-medium text-white hover:bg-red-600">
              {button}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}
