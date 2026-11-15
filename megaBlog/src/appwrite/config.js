import conf from "../conf/conf";
import {Client,ID,Databases,Storage,Query} from 'appwrite'

export class Service{
    client=new Client()
    database
    bucket

    constructor(){
        this.client
        .setProject(conf.appwriteUrl)
        .setEndpoint(conf.projectId)

        this.database=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }

    async createPost({title,content,featuredImage,userId,status}){  // here we are using async beacuse it is directed like that in documentaion 
        try {
            return await this.database.createDocument(conf.databaseId,conf.tableId,slug,{
                title,
                content,
                featuredImage,
                userId,
                status
            })
        } catch (error) {
            console.log("appwrite service :: createPost :: error",error)
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
             await this.database.updateDocument(conf.databaseId,conf.tableId,slug,{ // here we are using slug as unoque id 
                title,
                content,
                featuredImage,
                status
            })
            return true
        } catch (error) {
   console.log("appwrite service :: updatePost :: error",error)
   return false
        }
    }

    async deletePost(slug){
        try {
                return await this.database.deleteDocument(conf.databaseId,conf.tableId,slug)
        } catch (error) {
            console.log("appwrite service :: deletePost :: error",error)
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(conf.databaseId,conf.tableId,slug)
        } catch (error) {
              console.log("appwrite service :: getPost :: error",error)
              return false
        }
    }

    async listPost(queries=[Query.equal('status','active')]){
        try {
            return await this.database.listDocuments(conf.databaseId,conf.tableId,queries)
        } catch (error) {
             console.log("appwrite service :: listPost :: error",error)
             return false
        }
    }

    // file upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile( conf.bucket_Id,ID.unique(),file) 
        } catch (error) {
            console.log("appwrite service :: uploadFile :: error",error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
                    return await this.bucket.deleteFile(conf.bucket_Id,fileId)
        } catch (error) {
             console.log("appwrite service :: deleteFile :: error",error)
             return false
        }
    }

 filePreview(fileId){
   return  this.bucket.getFilePreview(conf.bucket_Id,fileId )
 }
}
const service=new Service()
export default Service