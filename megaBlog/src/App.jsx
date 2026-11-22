import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import  {Header,Footer} from './components/index.js'
import {Outlet} from 'react-router-dom'


function App() {
  const [loading,setLoading]=useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
      dispatch(logout())
      }
    })
    .finally(setLoading(false))
  },[])
  if(loading){
   return( <div className='h-full flex justify-center items-center'>
      <h3 className='text-2xl text-green-400'>Loading...</h3>
    </div>)
  }else{
   return(
    <div className='h-screen flex flex-col items-center'>
      <Header/>
      <main>
       <Outlet/>
      </main>
      <Footer/>
    </div>
   )
  }
}

export default App
