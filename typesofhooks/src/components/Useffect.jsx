import { useState,useEffect } from "react"

function Useffect(){
    let [placeholders,setPlaceholders]=useState('posts')
    let [placeholderType,setPlaceholdersTypes]=useState([])
    const controller= new AbortController() // AbortController is a built-in JavaScript object that allows you to cancel certain asynchronous // operations It's provided by the browser

  useEffect(()=>{
     
     fetch(`https://jsonplaceholder.typicode.com/${placeholders}/`)
    .then((data)=>{
        return data.json()
    })
    .then((jsData)=>{
        setPlaceholdersTypes(jsData)
    })
    .catch((error)=>{
        console.log('e:',error)
    })
    return ()=>{ // this is called cleanup function frist the cleanup function executes and then after that other is executed 
        controller.abort()
    }
    
   
  },[placeholders]) // here we run useffect when placeholders change that doesnot mean that placeholder value is passed it only takes it as one of it dependencies 
//    when some change occurs in placeholders then only the useEffect runs and fetch the data 
//   we cannot keep the async operations outside function beacuse it runs Infinity as App rerenders 
    return(
        <div className="p-5">
            <div className="flex gap-3">
                <button className="border-2
                 border-black 
                 rounded-md
                  p-1 
                  cursor-pointer
                   hover:scale-120
                    transition-all
                     duration-500"
                     onClick={()=>{
                        setPlaceholders('posts')
                     }}>posts</button>

                <button className="border-2
                 border-black 
                 rounded-md
                  p-1 
                  cursor-pointer
                   hover:scale-120
                    transition-all
                     duration-500"
                     onClick={()=>{
                        setPlaceholders('users')
                     }}>users</button>

                <button className="border-2
                 border-black 
                 rounded-md
                  p-1 
                  cursor-pointer
                   hover:scale-120
                    transition-all
                     duration-500"
                     onClick={()=>{
                        setPlaceholders('comments')
                     }}>comments</button>
            </div>
            <div>
                <h1 className="mt-5">{placeholders}</h1>
                {placeholderType.map((item)=>{
                         return <pre>{JSON.stringify(item)}</pre> 
                           {/*json.stringify is needed because react cannot directly render oridinary object so we have to convert it into anything else like */}
                 })}  {/*React can render strings, numbers, JSX elements, and arrays of renderable elements, but not ordinary objects directly. */}
                
            </div>
        </div>
    )
}
export default Useffect