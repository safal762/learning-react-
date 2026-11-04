import { useState } from 'react'
import { Inputbox } from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'
import './App.css'

function App() {

  let [amount,setAmount]=useState(0)
  let [from,setFrom]=useState("USD")
  let [to,setTo]=useState('NPR')
  let [convertedAmount,setCounvertedamount]=useState(0)

  function swap(){
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setCounvertedamount(amount)
  }

  let currencyInfo=useCurrencyinfo(from)

  let currencyKeys=Object.keys(currencyInfo)
  function convert(){
    setCounvertedamount(amount * currencyInfo[to])
  }

   return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(https://images.pexels.com/photos/35251423/pexels-photo-35251423.jpeg)`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <Inputbox
                                lable="From"
                            amount={amount}
                            currencyOptions={currencyKeys}
                            onChangeamount={(amount)=>{
                              setAmount(amount)
                            }}
                            currencyValue={from}
                            onChangecurrency={(currency)=>{
                             setAmount(amount)
                            }}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                               onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Inputbox
                                lable="To"
                                  amount={convertedAmount}
                                  currencyOptions={currencyKeys}
                                  currencyValue={to}
                                  onChangecurrency={(currency)=>{
                                    setTo(currency)
                                  }}
                                  
                                  onAmountdisbale
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        >
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
  }

export default App
