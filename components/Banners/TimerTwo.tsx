import React, { useState, useEffect } from 'react'

export default function Timer() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 2)
      const d = Math.floor((targetDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      setDays(d)
      const h = Math.floor(((targetDate.getTime() - now.getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      setHours(h)
      const m = Math.floor(((targetDate.getTime() - now.getTime()) % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)
      const s = Math.floor(((targetDate.getTime() - now.getTime()) % (1000 * 60)) / 1000)
      setSeconds(s)
      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setDays(0)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed z-10 w-full">
      <div className="flex items-center gap-x-6 bg-blue-600 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
        <p className="text-sm leading-6 text-white">
          <a href="#">
            <strong className="font-semibold">!Promoción! </strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            haga su pedido hoy y obtenga un DESCUENTO 50% &nbsp;<span aria-hidden="true">&rarr;</span>
            <span className="text-red-600"> Days {days}:</span>
            <span className="text-red-600">{hours}:</span>
            <span className="text-red-600">{minutes}:</span>
            <span className="text-red-600">{seconds}</span>
          </a>
        </p>
        <div className="flex flex-1 justify-end">
          <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Dismiss</span>
          </button>
        </div>
      </div>
    </div>
  )
}
