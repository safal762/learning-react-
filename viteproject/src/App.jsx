import { useState } from 'react'
import Chai from './Chai'
function App() {

const username='safal' // decralring the valriable cannot do it inside return 
  return (
   <>
    <h1>chai aur code |
   this is project made for vite+react not like the frist made using only react he we use the buldler 
   which is vite in this case can be others too depends on what we want to use 
   with this method the file creation is fater and easy and is not bulky here also we check 
   package.json to see what does the project include 
   </h1>
     <h2>{username}</h2>{/* {safal} is called embedded expression/evaluted expression  to pass the values of the valriable it gives the final value  
   <Chai/> */}
   </>

  )
}

export default App
