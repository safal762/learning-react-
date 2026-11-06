import { useEffect, useState } from 'react'

import './App.css'
import Theme from './components/Theme'
import Card from './components/Card'
import { themeChanger } from './contexts/themChanger.js'
import { ThemeChangeProvider } from './contexts/themChanger.js'
function App() {
  const[themeMode,setTheme]=useState('light')

  const darkMode=()=>{
    setTheme('dark') // must have same name as defined while creating context
  }
  const lightMode=()=>{
    setTheme('light')
  }
    
  useEffect(()=>{

 document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])
  return (
   <ThemeChangeProvider value={{themeMode,lightMode,darkMode}}>
       
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Theme/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
   </ThemeChangeProvider>

  )
}

export default App
