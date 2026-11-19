import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import logout from '../../store/authSlice.js'
function LogoutBtn() {
    const dispatch=useDispatch()
    const logoutHandeler=()=>{
      authService.logOut()
      .then(()=>{
        dispatch(logout())
      })
      .catch((error)=>{
        console.log("logout button:: error::",error)
      })
    }
  return (
  <div className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer">
  LogoutBtn
</div>
  )
}

export default LogoutBtn