import React from 'react'

export default function Card({blog}) {
  return (
    <>
    <div className="h-full w-2/12 m-2 flex-shrink-0 cursor-pointer">
      <div className="overflow-hidden mb-4 relative h-32">
        <img className="object-cover" src={`imgs/${blog}.jpg `} />
      </div>
    </div>
  </>
  )
}
