import React, { useContext } from 'react'
import userContext from '../context/userContext'

function profile() {
  const {user}=useContext(userContext)
  if(!user) return <h1>please Login</h1>
  return <h1>username:{user}</h1>
}

export default profile