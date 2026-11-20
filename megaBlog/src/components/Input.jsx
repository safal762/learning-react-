import React, { forwardRef, use } from 'react'
import { useId } from 'react'
const Input = forwardRef(function inputForm({  // we use forwardref hook if we have the state in one component and we want to acess it from other components and send values from other components 
    label,
    type = "text",
    className = "",
    ...props
}, ref) // this is the reference of the forwardRef hook which is accesable from another component 
{
    const id = useId()
    return (
        <div className='w-full'>
            {label && (
                <label htmlFor={id}>{label}</label>
            )}
            <input type={type} id={id} className={`${className}`} {...props} ref={ref}  />  {/* from here the reference is passed in other components */}
        </div>
    )
})

export default Input