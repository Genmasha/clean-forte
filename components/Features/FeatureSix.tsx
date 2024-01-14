import { ArrowPathIcon, HeartIcon, LightBulbIcon } from '@heroicons/react/20/solid'
import { ShieldCheckIcon } from '@heroicons/react/24/solid'

const features = [
  {
    name: 'Sin OMG',
    description:
      'Tomar por vía oral 3 veces al día, 1 pieza independientemente de las comidas, lavar con abundante agua.',
    href: '#',
    icon: ShieldCheckIcon
  },
  {
    name: 'A base de ingredientes Naturales',
    description: 'La duración efectiva del tratamiento es de 60 días.*',
    href: '#',
    icon: ShieldCheckIcon
  }
]

export default function FeatureSix() {
  return (
    <div className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-grey-900 sm:text-4xl">¿Cómo usar Incasol?</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map(feature => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-grey-900">
                  <feature.icon className="h-12 w-12 flex-none text-green-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-900">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
