import React, { useCallback, useEffect } from 'react'
import {useSelector} from 'react-redux'
import { useForm } from 'react-hook-form'
import service  from '../../appwrite/config.js'
import { RTE,Button,Input,Select } from '../index'
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
                                navigate(`/post/${post.$id}`)
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
    <div className="w-full bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
  <form onClick={handleSubmit(sumbit)} className="space-y-6">

    <div>
      <Input
        label="title"
        type="text"
        placeholder='title'
        {
          ...register('title',{
            required:true,
            pattern:{
              value:/^(?![ -.&,_'":?!])(?!.*[- &_'":]$)(?!.*[-.#@&,:?!]{2})[a-zA-Z0-9- .#@&,_'":.?!]+$/gm,
              message:"enter the valid title"
            }
          })
        }
      />
    </div>

    <div>
      <Input
        label="slug"
        onInput={(e)=>{
          setValue('slug',e.target.value)
        }}
        {
          ...register("slug")
        }
      />
    </div>

    <div>
      <RTE
        label="content"
        control={control}
        deafultValue={getValues('content')}
        {
          ...register('RTE',{
            required:true
          })
        }
      />
    </div>

    <div>
      <Input
        label="file"
        type="file"
        accept=".jpg,.png.pdf,.svg,.webp"
        {
          ...register('image',{
            required:!post
          })
        }
      />
    </div>

    {
      post && (
        <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
          <img
            src={service.filePreview(post.featuredImage)}
            alt={post.title}
            className="w-full max-h-64 object-cover"
          />
        </div>
      )
    }

    <div>
      <select
        label='status'
        options={["active","inactive"]}
        {
          ...register('select',{
            required:true
          })
        }
      />
    </div>

    <div className="pt-2">
      <Button type='sumbit'>
        {post?'updatePost':'createPost'}
      </Button>
    </div>

  </form>
</div>
  )
}

export default Post