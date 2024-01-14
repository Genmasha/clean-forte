import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Container } from '../Specials/Container'

export type CardType = {
  heading: string
  text: string
  img: StaticImageData
}

type Props = {
  title: string
  cards: CardType[]
}
export const Testimonials = (props: Props) => {
  const { cards, title } = props
  const renderCard = (card: CardType) => {
    return (
      <div
        className="flex flex-col md:mx-5 items-center p-6 rounded-lg bg-green-100 lg:flex lg:w-1/4 mx-0 mt-14"
        key={card.heading}
      >
        <div>
          <Image src={card.img} className="w-auto -mt-16 max-w-[132px] rounded-2xl" alt="benefits" />
        </div>
        <div>
          <h5 className="text-xl text-grey-900 font-bold">{card.heading}</h5>
        </div>
        <div>
          <p className="text-md text-grey-900">{card.text}</p>
        </div>
      </div>
    )
  }
  return (
    <Container className="bg-white">
      <div className="px-5 mt-12 text-center">
        <h2 className="sm:mb-16 mb-10 text-4xl text-grey-900 font-bold text-center">{title}</h2>
        <div className="flex flex-col lg:flex-row ">{cards.map(card => renderCard(card))}</div>
      </div>
    </Container>
  )
}
export default Testimonials
