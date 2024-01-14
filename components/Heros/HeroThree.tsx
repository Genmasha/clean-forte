import React, { useRef } from 'react'
import { Container } from '../Specials/Container'
import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'
import ScrollLink from '../Specials/ScrollLink'

type Props = {
  title: string
  icon?: StaticImageData
  subtitle?: string
  description?: string
  descriptionIcon?: StaticImageData
  bg?: StaticImageData
  subImg?: StaticImageData
  button?: string
  onClick?: () => void
  hrefToScroll?: string
}

const HeroThree = (props: Props) => {
  const { title, icon, subtitle, description, descriptionIcon, subImg, button, onClick, hrefToScroll } = props

  const renderSubtitle = () => {
    return <h2 className="md:flex text-5xl hidden mt-12 text-black">{subtitle}</h2>
  }
  const renderDescription = () => {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-rows-2 grid-rows-1 grid-flow-col xl:px-32 sm:px-6 px-1 pt-12 justify-items-center">
        <p className="md:text-4xl text-base mt-12 text-left text-white">{description}</p>
        {subImg && (
          <div className="md:block hidden mt-4">
            <Image src={subImg} alt="sub" />
          </div>
        )}
        {descriptionIcon && (
          <div className="row-span-3">
            <Image src={descriptionIcon} alt="descriptionIcon" />
          </div>
        )}
      </div>
    )
  }
  return (
    <div className="object-fit bg-cover bg-center fill-current custom-img">
      <Container>
        <section className={clsx('flex flex-col items-center justify-center text-center')}>
          <div className="flex items-center justify-center text-center mt-2">
            {icon && <Image className="w-8 h-8" src={icon} alt="icon" />}
            <h1 className="md:text-8xl text-3xl text-black">{title}</h1>
          </div>
          {subtitle && renderSubtitle()}
          {description && renderDescription()}
          {button && hrefToScroll && (
            <ScrollLink href={hrefToScroll}>
              <button
                onClick={onClick}
                className="rounded bg-yellow-300 mt-4 md:py-8 md:px-12 py-4 px-4 md:text-3xl text-xs font-semibold text-black shadow-sm hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
              >
                {button}
              </button>
            </ScrollLink>
          )}
        </section>
      </Container>
    </div>
  )
}

export default HeroThree
