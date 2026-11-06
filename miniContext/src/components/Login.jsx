import React, { useContext, useState } from 'react'
import userContext from '../context/userContext'

function Login() {
    const {setUser}=useContext(userContext)

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const handelForm=(e)=>{
        e.preventDefault()
        setUser(username,password)
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='Username' 
        value={username} onChange={(e)=>{
            setUsername(e.target.value)
        }} />
        <input type="text" placeholder='password'
        value={password} onChange={(e)=>{
            setPassword(e.target.value)
        }}  />
        <button onClick={handelForm}>Login</button>
    </div>
  )
}

export default Login