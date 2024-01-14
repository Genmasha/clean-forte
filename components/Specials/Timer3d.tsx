import React, { ReactElement, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { DateTime } from 'luxon'

import Timer3dCard from './Timer3dCard'
import useIsMounted from '../hooks/UseIsMounted'

export type TimeToDateLabels = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

type Props = {
  labels: TimeToDateLabels
}

type CurrentPrevious = {
  current: Countdown
  previous: Countdown | null
}

type Countdown = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const getTimeLeft = (endDate: DateTime): Countdown => {
  const now = DateTime.local()
  const { days, hours, minutes, seconds } = endDate.diff(now, ['days', 'hours', 'minutes', 'seconds'])
  return {
    days: Math.max(0, Math.trunc(days)),
    hours: Math.max(0, Math.trunc(hours)),
    minutes: Math.max(0, Math.trunc(minutes)),
    seconds: Math.max(0, Math.trunc(seconds))
  }
}

const useCountdown = (endDate: DateTime): CurrentPrevious => {
  const initial = getTimeLeft(endDate)
  const [{ current, previous }, setCountdown] = useState<CurrentPrevious>({ current: initial, previous: null })

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(({ current }) => {
        return {
          previous: current,
          current: getTimeLeft(endDate)
        }
      })
    }, 1000)
    return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { previous, current }
}

const Timer3d = (props: Props): ReactElement => {
  const { labels } = props
  const isMounted = useIsMounted()
  const router = useRouter()
  const now = DateTime.local()
  let defaultDays = 1
  if (now.day % 2 == 0) { defaultDays = 0 }
  const hours = 24 - now.hour
  const minutes = 60 - now.minute
  const seconds = 60 - now.second

  const defaultTime = useMemo(() => DateTime.local().plus({ days: defaultDays, hours: hours, minutes: minutes, seconds: seconds }), [])
  const initialDate = router.query?.date
    ? DateTime.fromISO(Array.isArray(router.query.date) ? router.query.date[0] : router.query.date)
    : null
  const { current, previous } = useCountdown(initialDate?.isValid ? initialDate : defaultTime)

  if (!isMounted) return <></>

  return (
    <div className="flex space-x-1 justify-center my-2">
      <Timer3dCard
        id={`days${current.days}-${previous?.days}`}
        label={labels.days}
        key={`days${current.days}-${previous?.days}`}
        current={current.days}
        previous={previous?.days}
      />
      <Timer3dCard
        id={`hours${current.hours}-${previous?.hours}`}
        label={labels.hours}
        key={`hours${current.hours}-${previous?.hours}`}
        current={current.hours}
        previous={previous?.hours}
      />
      <Timer3dCard
        id={`minutes${current.minutes}-${previous?.minutes}`}
        label={labels.minutes}
        key={`minutes${current.minutes}-${previous?.minutes}`}
        current={current.minutes}
        previous={previous?.minutes}
      />
      <Timer3dCard
        id={`seconds${current.seconds}-${previous?.seconds}`}
        label={labels.seconds}
        key={`seconds${current.seconds}-${previous?.seconds}`}
        current={current.seconds}
        previous={previous?.seconds}
      />
    </div>
  )
}

export default Timer3d
