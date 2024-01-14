import Link from 'next/link'
import React from 'react'

type Props = {
  description: string
  buttonTitle: string
  buttoneRejectTitle: string
  setCookieModal(value: boolean): void
  cookieModal: boolean
}

export default function CookieOne(props: Props) {
  const { description, buttonTitle, buttoneRejectTitle, setCookieModal, cookieModal } = props

  return cookieModal ? (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
      <div className="pointer-events-auto mx-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
        <p className="text-sm leading-6 text-gray-900">
          {description}{' '}
          <Link href="/policy" className="font-semibold text-red-600">
            cookie policy
          </Link>
          .
        </p>
        <div className="mt-4 flex items-center gap-x-5">
          <button
            type="button"
            onClick={() => setCookieModal(false)}
            className="rounded-md bg-red-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
          >
            {buttonTitle}
          </button>
          <button
            type="button"
            onClick={() => setCookieModal(false)}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {buttoneRejectTitle}
          </button>
        </div>
      </div>
    </div>
  ) : null
}
