import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import service from '../appwrite/config'
import { Container } from '../components/container/Container.jsx'
import { Button } from '../components'
function Post() {
    const [post,setPost]=useState([])
    const {slug}=useParams()
    const navigate=useNavigate()
    const userData=useSelector((state)=>{
        state.userData
    })
    const isAuthor= post && userData? post.userId === userData.$id :false
    useEffect(()=>{
        service.getPost(slug)
        .then(
            post=> {if(post) {setPost(post)}
         else{
              navigate('/')  
            }}
           
        )
    },[slug,navigate])

    const deletePost= async(post)=>{
        service.deletePost(post.$id)
        .then((status)=>{
            if(status){
                service.deleteFile(post.featurdImage)
            }else{
                navigate('/')
            }
        })
    }
  return (
   <div className="bg-blue-50 py-8">
  <Container>
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">

      <div>
        <img
          src={service.filePreview(post.featurdImage)}
          alt={post.title}
          className="w-full max-h-[500px] object-cover"
        />
      </div>

      <div className="p-4 flex justify-end">
        {
          isAuthor && (
            <div className="flex items-center gap-3">
              <Link to={`/post/${post.$id}`}>
                <Button>edit</Button>
              </Link>

              <Button onClick={deletePost}>
                deletePost
              </Button>
            </div>
          )
        }
      </div>

    </div>
  </Container>
</div>
  )
}

export default Post