import { useCallback, useEffect, useState    } from "react";

function useCurrencyinfo(currency){
    let [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/b4885b893c98ec5efc22f368/latest/${currency}`)
        .then((response)=>{
            return response.json()
        })
        .then((jdata)=>{
                setData(jdata.conversion_rates)
        })
        .catch((error)=>{
            console.log('e:',error)
        })
    },[currency])
    return data
}
export default useCurrencyinfo

// this is a custom hooks we can use other hook inside our custom hooks and hooks are just a function that return something