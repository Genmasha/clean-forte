import React from 'react'
import ScrollLink from '../Specials/ScrollLink'

type Props = {
  title: string
  description: string
  button: string
}

export default function HeroOne(props: Props) {
  const { title, description, button } = props
  return (
    <div className="w-full h-full bg-no-repeat bg-cover bg-[url('../img/bg.jpg')] bg-black/70 bg-blend-darken">
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-6xl font-bold text-white text-center">{title}</h2>
        <p className="block text-2xl text-white text-center m-3">{description}</p>
        <ScrollLink href="#contact">
          <button
            type="button"
            className="rounded bg-red-600 py-2.5 px-14 text-base font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 opacity-100 transition duration-500 ease-in-out"
          >
            <div className="whitespace-nowrap inline">{button}</div>
          </button>
        </ScrollLink>
      </div>
    </div>
  )
}
