import { useEffect, useRef, useState } from "react"

function Useref(){
    let [name,setName]=useState('')
    let inputref=useRef()
 function focus(){
    inputref.current.focus() // action is preformed here using the reference 
 }
 
    return(
        <div className="p-2">

            <input type="text" className="h-5 w-full border-2" ref={inputref}
            // here the reference is given
               onChange={(e)=>{
                setName(e.target.value)
               }}
            />
            <button className="border-black border rounded mt-5 p-2 cursor-pointer hover:scale-110 duration-200 " 
            onClick={()=>{
                focus()
            }}>focus</button>
        <h1>this is my name{name}</h1>
        </div>
    )
}

export default Useref