import React, { useCallback, useEffect } from 'react'
import {useSelector} from 'react-redux'
import { useForm, Watch } from 'react-hook-form'
import { service } from '../../appwrite/config'
import { RTE,Button } from '../index'
import { useNavigate } from 'react-router-dom'
function Post(post) {
        const {register,handleSubmit,getValues,control,setValue}=useForm({
                title:post?.title || '',
                slug:post?.slug  || '',
                content:post?.content || '',
                status:post?.status || 'active',
        })

            const navigate=useNavigate()
            const userData=useSelector((state)=>{
                return state.user.userData
            })   

            const sumbit=async (data)=>{
                if(post){
                    const file=data.image[0]? await service.uploadFile(image[0]):null
                    if(file){
                        await service.deleteFile(post.featuredImage)
                    }
                    const dbPost=file?service.updatePost(post.$id,{
                        ...data,
                        featuredImage:file?file.$id:undefined
                    }):undefined
                    if(dbPost){
                        navigate(`/post/${post.$id}`)
                    }
                }else{
                    const file=data.image[0]? await service.uploadFile(image[0]):null  
                    if(file){
                            const fileId=file.$id
                            const featuredImage=fileId
                            const dbPost=await service.createPost({
                                ...data,
                                userId:userData.$id
                            })
                            if(dbPost){
                                navigate(`/post${post.$id}`)
                            }
                    }
                }
            }

            const slugTransform=useCallback((value)=>{
                 if(value && typeof(value) === 'string' ){
                    return value
                    .trim()
                    .toLowerCase()
                    .replace(/\s/g,'-')
                 }
                 return ''
            },[])

            useEffect(()=>{
               const subscription=Watch((value,{name})=>{
                if(name==='title'){
                    setValue('slug',slugTransform(value.title,
                        {shouldValidate:true}
                    ))
                }
                return()=>{
                    subscription.unsubscribe()
                }
               })
            },[Watch,slugTransform,setValue])
        
  return (
    <div>Post</div>
  )
}

export default Post