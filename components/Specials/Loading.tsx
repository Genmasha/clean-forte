import React from 'react'

export default function Loading() {
  return (
    <div className="min-h-[10rem] flex flex-col bg-white rounded-xl ">
      <div className="flex flex-auto flex-col justify-center items-center p-4 px-24 md:p-5">
        <div className="flex justify-center">
          <div
            className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-red-600 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  )
}
