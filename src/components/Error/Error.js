import React from 'react'
import './Error.css'

export default function Error ({ children }) {
  return (
    <div className='error'>
      <p>{children}</p>
    </div>
  )
}
