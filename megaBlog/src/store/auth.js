import {configureStore} from '@reduxjs/toolkit'
import { login, logout } from './authSlice'
import authreducer from './authSlice'
const Store=configureStore({
    reducer:{
       auth:authreducer
    }
})

export default Store