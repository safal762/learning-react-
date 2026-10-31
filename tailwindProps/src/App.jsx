import { useState } from 'react'

import './App.css'
import Card from './components/Card'
function App() {
  // let obj={
  //   name:'safal',
  //   btnName:'clickMe'
  // }
  // let arr=[
  //   "hello","visitMe"c
  // ]

  return (
    <>
      <h1 className='bg-green-500 text-black mb-4'>Tailwind</h1>
      {/* <Card userName={obj}/>
      <Card userName={arr}/> */}

      <Card userName='safal'/>
      <Card userName='hello'/>
    </>
  )
}

export default App
