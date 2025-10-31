import React from 'react'
import { COLORS, FONTS, images } from '../constants'



const ImageUpload = ({
    id,
    onChange,
    inputRef,
    src = 'no-image-available.png',
    fileName = "No Image",
    closeOnclick,
    label="Image Upload",
}) => {

    const styles = {
        container: {margin: '1rem auto'},
        imageContainer: { width: "100%", height: "100%", backgroundColor: COLORS.transparentPrimray, display: 'flex', margin: '1rem 0',},
        image: {textAlign: 'center', borderTopLeftRadius: "50px"},
    }

    function renderImage() {
        return ( 
            <div style={styles.imageContainer}>
            <img src={src} id='productImageOutput' alt={fileName} style={styles.image} width={'100%'} height={'100%'}/>
            <i 
                className="far fa-times-circle"
                style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    color: 'red'
                }}
                onClick={closeOnclick}
            />
        </div>
        )
    }

    return (
        <div style={styles.container}>
            <h5>{label}</h5>

            {src !== 'no-image-available.png' ? renderImage() : null}

            <input 
                type="file" 
                accept='image/*'
                // hidden 
                id={id}
                name={id}
                onChange={onChange}
                ref={inputRef}
            />
        </div>
    )
}

export default ImageUpload
