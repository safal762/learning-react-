import React, { forwardRef } from 'react'
import { useId } from 'react'
function Select({
    options=[],
    className="",
    ...props
},ref) {
    const id=useId()
  return (
    <div>
        {
           label &&  (
            <label htmlFor={id} className={` ${className}`}></label>
          
            )
        }
          <select {...props} name="selectOption" id={id}>
            {options?.map((option,index)=>{
                return <option key={index} value={option} ref={ref}>{option}</option>
            })}
          </select>
    </div>
  )
}

export default forwardRef(Select)