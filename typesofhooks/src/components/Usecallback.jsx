import { useCallback, useState } from "react"

function Usecallback(){
    let [count,setCount]=useState(0)
    let [greet,setGreet]=useState('')
   const callBack= useCallback(()=>{
        console.log('greetings')
    },[]) // here callback do the memozation which means to remember the reference or remember the previous result
    // without callback when we click to count app rerenders and the function is created again so using usecallback prevents it with the help of memozation
    return (
        <div className="flex gap-2 p-2 items-center">
        <button className="p-2 border rounded border-black cursor-pointer" 
        onClick={()=>{
            setCount((prev)=>{
                return prev+1
            })
        }}>click to increase the count(+)</button>
            <button className="p-2 border rounded border-black cursor-pointer"
            onClick={callBack}>
                grettings
            </button>
            <h1>{count}</h1>
            <h1>{greet}</h1>
        </div>
    )
}

export default Usecallback