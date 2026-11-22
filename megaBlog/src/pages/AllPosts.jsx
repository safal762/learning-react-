import React, { useEffect, useState } from 'react'
import {Container,PostCard}  from '../components/index'
import service from '../appwrite/config'
function AllPosts() {
      const [post,setPost]=useState([])
      useEffect(()=>{
            service.getPost()
            .then((post)=>{
                setPost(post)
            })
            .catch((error)=>{
                console.log('getpost::error::',error)
            })
      })
  return (
  
   
<Container>
    <div>
        {post.map((post)=>{
            return <div key={post.$id}>
                <PostCard post={post} />
            </div>
        })}
    </div>
</Container>  
)}

export default AllPosts