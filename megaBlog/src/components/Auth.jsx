import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protection({children,authentication=true}) { // checks weather the use is login or not and if it is ok to show the pages to the user
    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)
    const authStatus=useSelector((state)=>{
        return state.auth.status 
    })

    useEffect(()=>{
        
        if(authentication && authStatus != authentication) // if user is not login then this condition runs
        {
            navigate('/login')
        }else if(!authentication && authStatus!=authentication){ // if user is login then this condotion runs 
                navigate("/")
        }
        setLoader(false)
    },[navigate,loader,authentication])
  return loader ? <h1>Loading...</h1>:<div>{children}</div>
}

export default Protection