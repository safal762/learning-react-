import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container,PostCard } from '../components'
function Home() {
    const [post,setPost]=useState(null)

    useEffect(()=>{
        service.getPost()
        .then((post)=>{
            if(post){
                setPost(post)
            }else{
                setPost(null)
            }
        })
        .catch((error)=>{
            console.log("home::error::",error)
        })
    })
  return post?(
   <Container>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
    {post.map((post,index)=>{
      return (
        <div key={index} className="w-full">
          <PostCard post={post}/>
        </div>
      )
    })}
  </div>
</Container>
):(
  <div className="min-h-[60vh] flex items-center justify-center bg-blue-50 rounded-xl">
    <h1 className="text-xl font-semibold text-gray-900">
      please sign up frist
    </h1>
  </div>
)

}

export default Home