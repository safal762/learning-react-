import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from './store/auth.js'
import {Route, RouterProvider} from 'react-router-dom'
import Login from './components/Login.jsx'
import Auth from './components/Auth'
import Signup from './components/Signup.jsx'
import Allpost from './pages/AllPosts.jsx'
import Editpost from './pages/Editpost.jsx'
import Addpost from './pages/Addpost'
import {createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/post'
const router =createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<App/>}> // we need to wrap other route in a parent route which we want as an parent layout

       <Route path='/' element={<Home/>}/>

      <Route path='/login' element={<Auth authentication={true}>
        <Login/>
      </Auth>}/>

        <Route path='/signup' element={<Auth authentication>
          <Signup/>
        </Auth>}/>

        <Route path='/allpost' element={<Auth authentication>
          <Allpost/>
        </Auth>}/>

        <Route path='/addpost' element={<Auth authentication>
          <Addpost/>
        </Auth>}/>

        <Route path='/editpost/:slug' element={<Auth authentication>
          <Editpost/>
        </Auth>}/>

        <Route path='/post/:slug' element={<Auth authentication>
          <Post/>
        </Auth>}/>
          

     </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={router}/>
  </Provider>,
)
