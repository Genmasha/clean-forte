import React, { useEffect, useRef, useState } from 'react'
import ScrollLink from '../Specials/ScrollLink'

type Props = {
  timer: string
  timeInSec: number
  href: string
}

export default function TimerOne(props: Props) {
  const { timer: timerOut, timeInSec, href } = props
  const Ref = useRef<NodeJS.Timer | null>(null)
  const [timer, setTimer] = useState('00:00:00')

  const getTimeRemaining = (e: any) => {
    const date = new Date()
    const total = Date.parse(e) - Date.parse(date.toString())

    const seconds = Math.floor((total / 1000) % 60)

    const minutes = Math.floor((total / 1000 / 60) % 60)

    const hours = Math.floor((total / 1000 / 60 / 60) % 24)

    return {
      total,
      hours,
      minutes,
      seconds
    }
  }

  const startTimer = (e: any) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e)

    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : '0' + hours) +
          ':' +
          (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }

  const clearTimer = (e: any) => {
    setTimer(timerOut)
    if (Ref.current) clearInterval(Ref.current)

    const id = setInterval(() => {
      startTimer(e)
    }, 1000)

    Ref.current = id
  }

  const getDeadTime = () => {
    let deadline = new Date()
    deadline.setSeconds(deadline.getSeconds() + timeInSec)
    return deadline
  }
  useEffect(() => {
    clearTimer(getDeadTime())
  }, [])

  return (
    <div className="fixed z-10 w-full">
      <div className="flex items-center gap-x-6 bg-blue-600 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
        <p className="text-sm leading-6 text-white">
          <ScrollLink href={href}>
            <strong className="font-semibold">!Promoción! </strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            haga su pedido hoy y obtenga un DESCUENTO 50% &nbsp;<span aria-hidden="true">&rarr;</span>
            <span className="text-red-600"> {timer}</span>
          </ScrollLink>
        </p>
        <div className="flex flex-1 justify-end">
          <button className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Dismiss</span>
          </button>
        </div>
      </div>
    </div>
  )
}
