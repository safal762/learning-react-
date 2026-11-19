import React from 'react'

function Button({
    childern,
    type="button",
    bgColor="bg-blue-500",
    text="white",
    className='',
    ...props  // seprading the others values 
}) {
  return (
    <button className={`rounded ${className} ${bgColor} ${text}`} {...props}>{childern}</button>
  )
}

export default Button