import React, { Children } from 'react'

function Container({children}) { // we have to use the childern not Children 
  // because lowercase children is an special react prop used for nested components
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 {children}
</div>
  )
}

export default Container