import Link from 'next/link'

type Props = {
  text: string
  rights: string
  disclaimer: string
}

const navigation = {
  main: [
    { name: 'Terms and conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/policy' }
  ]
}

export default function Footer(props: Props) {
  const { text, disclaimer, rights } = props
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-4 px-8 sm:py-8 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map(item => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {text} , {rights}.
        </p>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">{disclaimer}</p>
      </div>
    </footer>
  )
}
