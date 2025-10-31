import React from 'react'
import { FONTS } from '../constants'

const TextInput = ({ 
    label = "", 
    labelStyle,
    type = "text", 
    icon,  
    textValue = "", 
    onchange,  
    placeholder, 
    id, 
    errorText, 
    containerStyle, 
    inputStyle,
    required,
    isDisabled,
}) => {

    return (
    <>
        <div
            style={{
                borderBottom: '1px solid #f1f1f1',
                margin: '1rem 0',
                ...containerStyle
            }}
        >
            <label 
                htmlFor={id}
                style={{...FONTS.h5, ...labelStyle}}
                >{label}</label>
           
            <div
                style={{
                    margin: '.5rem 0'
                }}
                >
                {icon}
                <input 
                    id={id}
                    name={id}
                    type={type} 
                    required={required}
                    style={{
                        ...FONTS.body5,
                        border: 'none',
                        outline: 'none',
                        width: '100%',
                        padding: '0 0 0 1rem',
                        ...inputStyle,
                    }}
                    onChange={onchange}
                    placeholder={placeholder}
                    value={textValue}
                    disabled={isDisabled}
                />
            </div>
        <p className='text-danger'>{errorText}</p>
        </div>
    </>
    )
}

export default TextInput
