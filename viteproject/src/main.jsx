
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const createReact=(
  <a href='https://www.google.com' target='_blank'>click here to visit google</a> // need to follow the react syntax to use this
)

// we cannot use the normal object like in js in react 
// react has its own syntax to be followed for the making the object and make use of it 
// we need to follow the same serially way to create the obj using the react and use it 
const createObj=React.createElement(
  'a', // type of tag that we will create
  {href:'https://www.google.com', // in second we have to give the attriibuts / props in second  
    target:'_blank'
  },
  'click here to vist google' // here the text for the tag is given here 
)
createRoot(document.getElementById('root')).render(
  
  // createObj
  // createReact
    <App />
  
)
