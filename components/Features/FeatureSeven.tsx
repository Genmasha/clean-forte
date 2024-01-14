import { AnimatePresence, motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

type Features = {
  id: number
  name: string
  description: string
  imageSrc: StaticImageData
  imageAlt: string
  openModal: (open: boolean) => void
}

type Props = {
  title: string
  buttonTitle: string
  features: Features[]
}

export default function FeatureSeven(props: Props) {
  const { title, buttonTitle, features } = props
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          <AnimatePresence>
            {features.map(features => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                key={features.id}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 }
                }}
              >
                <div
                  key={features.id}
                  className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                >
                  <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none sm:h-96">
                    <Image
                      src={features.imageSrc}
                      alt={features.imageAlt}
                      className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      <span aria-hidden="true" className="inset-0" />
                      {features.name}
                    </h3>
                    <p className="text-sm text-gray-500">{features.description}</p>
                    <div className="flex flex-1 flex-col justify-end">
                      <button
                        onClick={() => {
                          features.openModal(true)
                        }}
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800"
                      >
                        {buttonTitle}
                      </button>
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
