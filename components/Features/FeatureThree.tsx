import { AnimatePresence, motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

type Feature = {
  name: string
  description: string
  imageSrc: StaticImageData
  imageAlt: string
}

type Props = {
  title: string
  description?: string
  features: Feature[]
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function isEven(n: number) {
  return n % 2 == 0
}

export default function FeatureThree(props: Props) {
  const { features, title, description } = props
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-14 px-4 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-xl text-black-500">{description}</p>
        </div>

        <div className="mt-16 space-y-16">
          <AnimatePresence>
            {features.map((feature, featureIdx) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                key={feature.name}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: isEven(featureIdx) ? 200 : -200 }
                }}
              >
                <div
                  key={feature.name}
                  className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                >
                  <div
                    className={classNames(
                      featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                      'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
                    )}
                  >
                    <h3 className="text-xl font-medium text-black-900">{feature.name}</h3>
                    <p className="mt-2 text-m text-grey-700">{feature.description}</p>
                  </div>
                  <div
                    className={classNames(
                      featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                      'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                    )}
                  >
                    <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                      <Image src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
