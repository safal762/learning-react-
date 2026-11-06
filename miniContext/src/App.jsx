import React from 'react'
import UserContextprovider from './context/provideUsercontex'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  return (
    <UserContextprovider>
    <Login/>
    <Profile/>
    </UserContextprovider>
  )
}

export default App