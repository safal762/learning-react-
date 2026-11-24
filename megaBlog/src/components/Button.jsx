import React from 'react'

function Button({
    children,
    type="button",
    bgColor="bg-blue-500",
    text="white",
    className='',
    ...props  // seprading the others values 
}) {
  return (
    <button className={`rounded ${className} ${bgColor} ${text}`} {...props}>{children}</button>
  )
}

export default Button