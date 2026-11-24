
import React, { forwardRef, useId } from 'react'

function Select({
    options = [],
    label,
    className = "",
    ...props
}, ref) {
    const id = useId()

    return (
        <div>
            {label && (
                <label htmlFor={id} className={className}>
                    {label}
                </label>
            )}

            <select {...props} id={id} ref={ref}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default forwardRef(Select)
