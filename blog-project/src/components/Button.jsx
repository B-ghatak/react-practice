import React, { Children } from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
   <button className={`px-4 py-2 ${bgColor} ${textColor}`} {...props}></button>
  )
}

export default Button