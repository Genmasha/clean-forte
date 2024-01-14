import Image, { StaticImageData } from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

type Feature = {
  name: string
}

type Props = {
  title: string
  description: string
  img: StaticImageData
  features: Feature[]
}

export default function ProductFeatures2(props: Props) {
  const { features, title, description, img } = props
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-3 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
          <Image src={img} alt="eye" className=" m-auto h-auto w-auto object-cover object-center lg:h-full lg:w-full" />
        </div>
        <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 sm:pb-20 sm:pt-5 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">{title}</p>
            <p className="mt-4 text-gray-500">{description}</p>
            <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-bg sm:grid-cols-2">
              {features.map(feature => (
                <div key={feature.name}>
                  <dt className="flex font-medium text-gray-900">
                    <CheckCircleIcon className="mr-2 h-6 w-6 text-red-400" aria-hidden="true" />
                    <span>{feature.name}</span>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}
