import { useState } from 'react' // we have to import hooks here as we imported useState according to our need 


function App() {
 let [state,setState]=useState(15) // this is useState hook one type of hook 
// here in useState hook state is the variable which stores the current value 
// setState is the method/function which helps to write the behiavour or logic for how useState behaves 
// useState(15) is the initial/starting value of hook 
// UI updation is controlled by react 
// react doesnot the update ui directly it needs to know so that work is done by hooks
// useState hooks are responsible to update the ui as React needs to know when something changes so it can update the screen.
//useState is used to store and manage values


// because of hooks we dont need to do get elementById , querySelector we can do it dirrectlt in reack use hooks 
 function addCount(){
  if(state<20){
  setState(state+1)
  }
 }
 function subCount(){
  if(state>1){
    setState(state-1)
  }
 }
  return (
    <>
     <h1>Chai aur code</h1>
     <p>counter:{state}</p>
     <button onClick={addCount}>add Count {state}</button>
     <button onClick={subCount}>sub Count {state}</button>
    </>
  )
}

export default App
