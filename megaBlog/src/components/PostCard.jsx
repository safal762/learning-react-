import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'
function PostCard({$id,title,featuredImage}) { // $id is the name of the id storing varibale to get access of it
  return (
     <Link to={`/${$id}`}>
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
   
        <img
    src={`${service.filePreview(featuredImage)}`} // sending file id in filePreview 
    alt="Card image"
    className="h-48 w-full object-cover"
  />
    

  <div className="p-4">
    <h2 className="text-lg font-semibold text-gray-900">
      {title}
    </h2>
  </div>
</div>
</Link>
  )
}

export default PostCard