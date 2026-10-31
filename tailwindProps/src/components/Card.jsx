import React from "react";
// this is component these are usable using jsx
function Card({userName}){
   // here we are using props 
   // we use props to pass the value between the components 
   // props stands for properties 
   // props are reusable 
   // we can pass props using two methods like writing props or using destructuring {{objectkey}}
    return(
  <div className="max-w-sm p-5 bg-black rounded-xl border border-gray-700">

      <img
        src="https://picsum.photos/400/200"
        alt="Card"
        className="w-full h-40 object-cover rounded-lg"
      />

      <h2 className="text-xl font-bold text-white mt-4">
        {/* {userName.name} {userName[0]} while passing object and array */}
        {userName}
      </h2>

      <p className="text-gray-400 mt-2">
        This is a simple card created using React and Tailwind CSS.
      </p>

      <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg">
        Learn More
      </button>

    </div>
    )
}

export default Card