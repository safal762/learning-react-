import React from 'react'
import { useParams } from 'react-router-dom' // this is react router hook so to use it we need to be inside the recat router rendered component to use it 
function User() {
    const {userId}=useParams() // gets the value form the url and assign inside userId and the variable should be same as we used in route in main.jsx
  return (
    <div className='bg-gray-800 text-2xl text-center text-white'>User:{userId}</div>
  )
}

export default User