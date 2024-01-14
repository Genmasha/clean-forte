import clsx from 'clsx'
import React, { ReactNode } from 'react'
type Props = {
  children?: ReactNode
  className?: string
}

export const Container = (props: Props) => {
  const { children, className } = props
  return <div className={clsx(className + ' md:pt-16 md:py-12 md:px-16 pt-2 py-2 px-2')}>{children}</div>
}
