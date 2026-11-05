import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function GIthub() {
//     let [data,setData]=useState(0)
//   useEffect(()=>{
//       fetch(`https://api.github.com/users/safal762`)
//     .then((Response)=>{
//         return Response.json()
//     })
//     .then((jData)=>{
//         setData(jData)
//     })
//     .catch((error)=>{
//         console.log('E:',error)
//     })
//   },[]) this is not optimized for more optimized way we can use the loader from react dom which is faster than useEffect 


    let data=useLoaderData()

  return (
    <div className='bg-gray-800'>
        <h1 className='text-center text-white'>followers:{data.followers}</h1>
        <img src={`${data.avatar_url}`} alt="github pic" className='w-100' />
    </div>
  )
}


async function getGithubinfo(){
   const response= await fetch(`https://api.github.com/users/safal762`)
    return response.json()
   
}
export  {GIthub,getGithubinfo}

