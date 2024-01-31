import React from 'react'

function Card({children}) {
  return (
    <div className='border-2 border-gray-700 w-[500px] h-12'>
     {children}
    </div>
  )
}

export default Card