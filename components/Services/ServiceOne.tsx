import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Container } from '../Specials/Container'
import clsx from 'clsx'

export type FlowType = {
  img: StaticImageData
  title?: string
}

type Props = {
  flow: FlowType[]
  title: string
  bg?: StaticImageData | string
}

export const OrderFlow = (props: Props) => {
  const { flow, title, bg } = props

  const renderItems = (item: FlowType, key: number) => {
    return (
      <div className="flex flex-col items-center" key={key}>
        <Image src={item.img} alt="ChitChat Logo" />
        {item.title && <span className="text-center my-4 text-lg sm:text-xl text-black">{item.title}</span>}
      </div>
    )
  }
  return (
    <div className={clsx(bg)}>
      <Container>
        <div className="px-5 pt-5 text-center">
          <h3 className="font-bold text-2xl text-center mb-8 md:hidden">{title}</h3>
          <div className="flex flex-row items-center justify-around">
            <h3 className="hidden font-bold text-center md:inline-block mb-8">{title}</h3>
            {flow.map((item, i) => renderItems(item, i))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default OrderFlow
