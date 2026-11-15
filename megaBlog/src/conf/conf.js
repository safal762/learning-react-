const conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    projectId:String(import.meta.env.VITE_PROJECT_ID),
    databaseId:String(import.meta.env.VITE_DATABASE_ID),
    tableId:String(import.meta.env.VITE_COLLECTION_ID),
    bucket_Id:String(import.meta.env.VITE_BUCKET_ID),
}

export default conf 


// .env file is very sensetive file it should not be public 
// but we can make a sample file of it using .env.sample where we can keep the variables only 
// we use String because without out string sometimes it can create problem without String sometime times the value can be treated as the number 
// while creating variables in vite we have to start with VITE_ in .env 
// and for react app REACT_APP_
// we can get the access of .env variables in app.jsx also but this is the production grade method // almost every one use this method
