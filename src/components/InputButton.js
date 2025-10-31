import React from 'react'

const InputButton = ({
    value,
    containerStyle,
    id,
    disabled,
}) => {
    return (
        <input 
            type="submit"
            className='button'
            disabled={disabled}
            id={id}
            style={{
                ...containerStyle,
                textAlign:'center',
                cursor: 'pointer',
            }}
            value={value}
        />
    )
}

export default InputButton
