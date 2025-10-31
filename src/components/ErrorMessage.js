import React from 'react'

const ErrorMessage = ({
    text,
    textColor,
    className,
    textStyle
}) => {
    return (
        <div>
            <p className={className} style={{color: textColor, ...textStyle}}>{text}</p>
        </div>
    )
}


export default ErrorMessage
