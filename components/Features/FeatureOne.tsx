import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'

type Feature = {
  name: string
  description: string
  icon?: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
      titleId?: string | undefined
    }
  >
}

type Props = {
  title: string
  description: string
  img: StaticImageData
  features: Feature[]
}

export default function FeatureSection(props: Props) {
  const { title, description, features, img } = props
  return (
    <div className="overflow-hidden bg-white py-8 sm:py-12">
      <div id="services" className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map(feature => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.icon ? (
                        <feature.icon className="absolute top-1 left-1 h-5 w-5 text-green-600" aria-hidden="true" />
                      ) : (
                        <CheckBadgeIcon className="absolute top-1 left-1 h-5 w-5 text-green-600" aria-hidden="true" />
                      )}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-red-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-118deg] bg-gray-100 ring-1 ring-inset"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-100 ring-1 ring-white/10"
                  src={img}
                  alt="Feature"
                  width={2432}
                  height={1442}
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl shadow-xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
