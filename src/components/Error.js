import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const {status,statusText} = useRouteError()
  return (
    <div className='bg-pink-100 text-center py-72 text-red-800'>
    <h1 className='text-xl'>OOPS !</h1>
    <h2 className='text-l'>Something went wrong</h2>
    <h3>{status} : {statusText}</h3>
    </div>
  )
}

export default Error