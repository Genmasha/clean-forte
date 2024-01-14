import React from 'react'
import Image, { StaticImageData } from 'next/image'

export type CardDescription = {
  name: string
  imageSrc: StaticImageData
  description: string
}

type Props = {
  cards: CardDescription[]
  title: string
}

export default function FeatureTwo(props: Props) {
  const { cards, title } = props
  return (
    <div className="bg-white">
      <div id="benefit" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gray-50 px-6 py-8 sm:p-8">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
              {cards.map(incentive => (
                <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <Image
                        className="mx-auto"
                        src={incentive.imageSrc}
                        alt="Picture of the author"
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
