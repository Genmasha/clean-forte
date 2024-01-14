import React, { ReactElement } from 'react'

const padStart = (number: number): string => {
  return number.toString().padStart(2, '0')
}

type Props = {
  id: string
  label: string
  current?: number
  previous?: number
}

const Timer3dCard = ({ id, label, current, previous }: Props): ReactElement => {
  return (
    <div>
      <div className="relative perspective">
        {/* Top Half Static */}
        <div className="relative rounded-t-lg h-10 w-16 overflow-hidden shadow-2xl">
          <p className="absolute top-5 left-0 right-0 text-center  text-gray-500 text-4xl">
            {typeof current === 'undefined' ? '' : padStart(current)}
          </p>
          <svg width="100%" height="100%">
            <mask id={`${id}-m`} fill="#f8fafc">
              <rect id={`${id}-r`} width="100%" height="100%" />
            </mask>
            <use href={`#${id}-r`} fill="#f8fafc" mask={`url(#${id}-m)`} />
          </svg>
        </div>

        {/* Bottom Half Static */}
        <div className="relative rounded-b-lg h-10 w-16 overflow-hidden shadow-2xl">
          <p className="absolute bottom-5 left-0 right-0 text-center text-gray-500 text-4xl" data-testid={id}>
            {typeof previous === 'undefined' ? '' : padStart(previous)}
          </p>
          <svg width="100%" height="100%">
            <mask id={`${id}-m2`} fill="#f8fafc">
              <rect id={`${id}-r2`} width="100%" height="100%" />
            </mask>
            <use href={`#${id}-r2`} fill="#f8fafc" mask={`url(#${id}-m2)`} />
          </svg>
        </div>

        <p className="text-xxs text-center text-theme_grayishBlue tracking-widest pt-3.5">{label}</p>

        {previous !== current && (
          <>
            <div className="absolute top-0 left-0 rounded-t-lg h-10 w-16 overflow-hidden animate-flipTop origin-bottom preserve-3d backface-hidden shadow-2xl">
              <div className="relative h-10">
                <p className="absolute top-5 left-0 right-0 text-center text-gray-500 text-4xl">
                  {typeof previous === 'undefined' ? '' : padStart(previous)}
                </p>
                <svg width="100%" height="100%">
                  <mask id={`${id}-mbottom`} fill="#f8fafc">
                    <rect id={`${id}-rbottom`} width="100%" height="100%" />
                  </mask>
                  <use href={`#${id}-rbottom`} fill="#f8fafc" mask={`url(#${id}-mbottom)`} />
                </svg>
              </div>
            </div>

            <div className="absolute top-10 left-0 rounded-b-lg h-10 w-16 overflow-hidden animate-flipBottom origin-top preserve-3d backface-hidden shadow-2xl">
              <div className="relative h-10">
                <p className="absolute bottom-5 left-0 right-0 text-center text-gray-500 text-4xl">
                  {typeof current === 'undefined' ? '' : padStart(current)}
                </p>
                <svg width="100%" height="100%">
                  <mask id={`${id}-m2bottom`} fill="#f8fafc">
                    <rect id={`${id}-r2bottom`} width="100%" height="100%" />
                    <circle r="8" fill="#000" cx="0" cy="0" />
                    <circle r="8" fill="#000" cx="100%" cy="0" />
                  </mask>
                  <use href={`#${id}-r2bottom`} fill="#f8fafc" mask={`url(#${id}-m2bottom)`} />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Timer3dCard
