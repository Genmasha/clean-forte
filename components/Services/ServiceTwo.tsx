import Image, { StaticImageData } from 'next/image'
import num from '../../resource/icons/operator.svg'

type Incentive = {
  name: string
  description: string
  img: StaticImageData
}
type Props = {
  incentives: Incentive[]
  title: string
}

const incentives = [
  {
    name: 'Agita antes de tomar',
    description: "",
    img: num
  },
  {
    name: 'Diluir 10 gotas en agua',
    description: '',
    img: num
  },
  {
    name: '¡Consume durante las comidas!',
    description: '',
    img: num
  }
]
export default function ServiceTwo() {

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 lg:max-w-none lg:grid-cols-3">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <Image className="mx-auto h-24 w-28" src={incentive.img} alt="" />
                </div>
              </div>
              <div className="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
                <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
