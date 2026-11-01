import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
 
  let [length,setLength]=useState(8)
  let [numberAllowed,setNumberallowed]=useState(false)
  let [charAllowed,setCharacterallowed]=useState(false)
  let [password,setPassword]=useState('')
  let generatePassword=useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed){
      str+='0123456789'
    }
    if(charAllowed){
      str+='~!@#$%^Z&*{}[]'
    }
    for(let i=1;i<=length;i++){
      let char=[Math.floor(Math.random()* str.length + 1)]
      pass+=str.charAt(char)
      setPassword(pass)
    }
    
  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed,generatePassword])

  let passwordRef=useRef(null)
  let copytoClip=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
  <div className='bg-gray-800 w-md  mx-auto my-3 rounded-2xl'>
    <h1 className=' text-white text-center text-4xl'>Password Generator</h1>

    <div className='p-5'>
      <input type="text" readOnly className='bg-white outline-none border-none w-80 rounded-tl-[5px] rounded-bl-[5px] cursor-auto ' value={password} ref={passwordRef}/>

      <button className=' text-white bg-blue-500 w-10 rounded-tr-[5px] rounded-br-[5px] cursor-pointer' onClick={()=>{
        copytoClip()
      }}>copy</button>
    </div>
    <div className='flex gap-5 px-10'>
  <div className='text-amber-500 flex gap-2'>
        <input type="range" min={8} max={100} className='cursor-pointer' id='length'onChange={(e)=>{setLength(e.target.value)}}/>
      <label htmlFor="length">{length}</label>  
  </div>

    <div className='flex gap-2 text-amber-500'>
        <input type="checkbox" id='number' defaultChecked={numberAllowed}  onChange={()=>{
          setNumberallowed((prev)=>{
           return !prev
          })
        }}/>
      <label htmlFor="number">Number</label>
    </div>

    <div className='flex gap-2 text-amber-500'>
        <input type="checkbox" id='character' defaultChecked={charAllowed} onChange={()=>{
          setCharacterallowed((prev)=>{
            return !prev
          })
        }}/>
      <label htmlFor="character">Character</label>
    </div>

    </div>
  </div>
  )
}

export default App
