import {React,useState} from 'react'
import { Link,matchPath,useNavigate } from 'react-router-dom'
import {Button,Input,Logo} from '../components/index'
import { login as authLogin} from '../store/authSlice'
import authService from '../appwrite/auth.js'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'
function Login() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {register,handelSumbit} = useForm()  // this is not a login related register // we get this register from rect-hook-form it is a syntax 
    const [error,setError]=useState("")

    const login =async(data)=>{
        setError("")
        try {
          const session = await authService.login(data) 
          if(session){
            const userData= await authService.getCurrentUser()
            if(userData){
                dispatch(authLogin(userData))
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

    <div className="flex justify-center mb-6">
      <Logo/>
    </div>

    <div>
      <Link to='/signup' className="block text-center mb-6">
        <h2 className="text-sm text-gray-600">
          If you don't have an account? <span className="font-semibold text-blue-600">Please sign up</span>
        </h2>
      </Link>

      {
        error && (
          <p className="bg-red-50 text-red-600 text-sm p-3 rounded-md mb-4">
            {error}
          </p>
        )
      }

      <form onClick={handelSumbit(login)} className="space-y-5">
        <div>
          <Input
            label="email"
            type="email"
            placeholder='Enter your email'
            {
              ...register("email",{
                required:true,
                pattern:{ // this checks the validation using regex 
                  value:/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
                  message:"Enter the correct email"
                }
              })
            }
          />
        </div>

        <div>
          <Input
            label="password"
            type="password"
            placeholder="Enter your password"
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

export default Login