import Image, { StaticImageData } from 'next/image'

type Incentive = {
  name: string
  description: string
  img: StaticImageData
}
type Props = {
  incentives: Incentive[]
  title: string
}
export default function ServiceTwoTwoRow(props: Props) {
  const { incentives, title } = props

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
        </div>
        <div className="grid grid-cols-2 gap-y-12  sm:gap-x-6  lg:gap-x-8">
          {incentives.map(incentive => (
            <div key={incentive.name}>
              <Image src={incentive.img} alt="avatar" className="h-24 w-auto mx-auto" />
              {/* <img src={incentive.imageSrc} alt="" className="h-24 w-auto mx-auto" /> */}
              <h3 className="mt-6 text-base font-medium text-center text-gray-900">{incentive.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
