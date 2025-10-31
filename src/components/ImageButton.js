import React from 'react'



const ImageButton = ({
    buttonContainerStyle, 
    image, 
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            style={{ cursor: 'pointer',...buttonContainerStyle}}
        >
            <img src={image} alt="" />
        </div>
    )
}

export default ImageButton
