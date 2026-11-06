import React, { createContext, useContext } from "react";

export const themeChanger=createContext({  // this is usally done in production and large cooprate companies this is more efficent way of making contexts
    themeMode:'light',  // this is the initial value of the context as in previous project we did not give the intial value
    lightMode:()=>{}, // functions will be defined later on 
    darkMode:()=>{}   
})

export const ThemeChangeProvider=themeChanger.Provider // this is provider wich will rap the componentes later on 


export const useTheme=()=>{
    return useContext(themeChanger)
}
