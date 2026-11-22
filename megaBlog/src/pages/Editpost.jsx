import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/config'
import { Container,Post } from '../components'
function Editpost() {
    const [post,setPosts]=useState(null)
    const navigate=useNavigate()
    const {slug}=useParams()

    useEffect(()=>{
        service.getPost(slug)
        .then((post)=>{
            if(post){
                setPosts(post)
            }else{
                navigate('/')
            }
        })
        .catch((error)=>{
            console.log("Editpost::error",error)
        })
    },[slug,navigate])
  return (
    <Container>
        <Post post={post}/>
    </Container>
  )
}

export default Editpost