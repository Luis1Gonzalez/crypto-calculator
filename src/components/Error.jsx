import React from 'react'

const Error = ({children}) => {
  return (
    <div className='border-2 mb-3 border-red-600 p-3 flex justify-center text-md'>
        {children}
    </div>
  )
}

export default Error