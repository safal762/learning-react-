import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../feature/todoFeature'
 export const todoStore=configureStore({  // frist we make a store where mostly a object is passed and inside that objectc we introduce the reducers 
    reducer:todoSlice // this is reducer which is defined in another file
 }) // we can make only one store in one application 

