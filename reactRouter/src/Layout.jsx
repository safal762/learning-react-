import React from 'react'
import Header from "./components/Header/Header"
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
function Layout() {
  return (
    <>
     <Header/>
    <Outlet/> {/* this helps to change the components header and footer are not changed but outlet is changed as we click the about contact and others as we defined in route  */}
    <Footer/>
    </>
  )
}

export default Layout