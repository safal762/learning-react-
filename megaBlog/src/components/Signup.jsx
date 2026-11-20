import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {login as authLogin, login} from '../store/authSlice'
import authService, { AuthService } from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import { Logo,Button,Input } from './index'
import {  useForm } from 'react-hook-form'

function Signup() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {register,handleSubmit}=useForm()
    const [error,setError]=useState('')

    const signup=async (data)=>{
        setError("")
        try {
            const userData= await authService.createAccount(data)
            if(userData){
                const currentUserdata=await authService.getCurrentUser()
                if(session){
                    dispatch(login(currentUserdata))
                    navigate('/')
                }
            }
            
        } catch (error) {
                setError(error.message)
        }
    }
  return (
 <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4 py-8">
  <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-8 shadow-sm">

    <div className="flex flex-col items-center mb-6">
      <div className="mb-4">
        <Logo/>
      </div>

      <h2 className="text-sm text-gray-600">
        Already have an account?
      </h2>

      <div className="mt-2">
        <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-800">
          signin
        </Link>
      </div>
    </div>

    {
      error && (
        <p className="bg-red-50 text-red-600 text-sm p-3 rounded-md mb-4">
          {error}
        </p>
      )
    }

    <div>
      <form onClick={handleSubmit(signup)} className="space-y-5">
        <div>
          <Input
            label="email"
            type="email"
            placeholder='Enter email'
            {
              ...register('email',{
                required:true,
                pattern:{
                  value:/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
                  message:"Enter the correct email"
                }
              })
            }
          />
        </div>

        <div>
          <Input
            label='password'
            type="password"
            placeholder="Enter password"
            {
              ...register("password",{
                required:true,
                pattern:{
                      value:/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
                  message:"enter the valid password "
                }
              })
            }
          />
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Signup