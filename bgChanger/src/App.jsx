import { useState } from "react"


function App() {
  let [color, setColor] = useState('olive')

  return (
    <div className=" w-full h-screen " style={{ backgroundColor: color }}>
      {/* can do inline css in react like this and color is the variable passed from useState hooks */}
      <div className=" fixed top-160 flex flex-wrap justify-center  inset-0 h-10 ">

        <div className="h-10  bg-white flex flex-wrap justify-center items-center gap-2.5 shadow-2xl rounded-lg px-3">

          <button className="rounded-2xl bg-red-500 h-8 w-15 text-white shadow-2xl cursor-pointer" onClick={() => setColor('red')}>red</button>
          <button className="rounded-2xl bg-green-500 h-8 w-15 text-white shadow-2xl cursor-pointer" onClick={() => setColor('green')}>Green</button>
          <button className="rounded-2xl bg-blue-500 h-8 w-15 text-white shadow-2xl cursor-pointer" onClick={() => setColor('blue')}>Blue</button>
          <button className="rounded-2xl bg-olive-500 h-8 w-15 text-white shadow-2xl cursor-pointer" onClick={() => setColor('olive')}>Olive</button>
          <button className="rounded-2xl bg-gray-500 h-8 w-15 text-white shadow-2xl cursor-pointer" onClick={() => setColor('gray')}>Gray</button>
          <button className="rounded-2xl bg-yellow-500 h-8 w-15 text-black shadow-2xl cursor-pointer" onClick={() => setColor('yellow')}>Yellow</button>
          <button className="rounded-2xl bg-pink-500 h-8 w-15 text-black shadow-2xl cursor-pointer" onClick={() => setColor('pink')}>Pink</button>
          <button className="rounded-2xl bg-purple-500 h-8 w-15 text-black shadow-2xl cursor-pointer" onClick={() => setColor('purple')}>Purple</button>
          <button className="rounded-2xl bg-violet-500 h-8 w-19 text-black shadow-2xl cursor-pointer" onClick={() => setColor('violet')}>Violet</button>
          <button className="rounded-2xl bg-white h-8 w-15 text-black shadow-2xl cursor-pointer" onClick={() => setColor('white')}>White</button>
          <button className="rounded-2xl bg-black h-8 w-15 text-white shadow-2xl cursor-pointer" onClick={() => setColor('black')}>Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
