import conf from "../conf/conf";
import {Client,Account,ID} from 'appwrite'

export class AuthService{
     client=new Client()
     account;

     constructor(){
         this.client
        .setProject(conf.appwriteUrl)
        .setEndpoint(conf.projectId)
        
        this.account=new Account(this.client)
    }

    async createAccount({email,password}){
        try {
            const accountCreated=await this.account.create(ID.unique(),email,password)
            if(accountCreated){
                // call another function
                return this.login({email,password})
            }else{
                return accountCreated  // we will manage its error as what value is in it 
            }
        } catch (error) {
                console.log("appwrite service ::create account :: error::",error)
        }
    }

    async login(email,password){
        try {
                return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            console.log("appwrite service :: login account :: error ::",error)
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("appwrite service :: currentUser :: error ::",error)
        }

        return null
    }

    async logOut(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("appwrite service :: logout :: error ::",error)
        }
    }
} 


const authService=new AuthService()

export default authService