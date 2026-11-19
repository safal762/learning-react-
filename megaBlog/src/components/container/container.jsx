import React, { Children } from 'react'

function container({Children}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 {Children}
</div>
  )
}

export default container