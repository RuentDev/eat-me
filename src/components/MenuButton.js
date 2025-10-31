import React from 'react'
import { FONTS, SIZES } from '../constants'

const MenuButton = ({label, image, containerStyle, imageWidth,imageHeight, onClick}) => {



    const styles = {
        container: {
            height: '220px',
            width: '200px',
            padding: '1rem 2rem',
            margin: '0 1rem',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: SIZES.radius,
            cursor: 'pointer',
            alignItems: 'center',
            ...containerStyle
        },
        label: {
            ...FONTS.h5, 
            textAlign: 'center',
             marginTop: '1.5rem',
        }
    }

    return (
        <div
            className='menuButton'
            id='menuButton'
            style={styles.container}
            onClick={onClick}
        >
            <img src={image} alt={label} width={imageWidth} height={imageHeight}/>
            <p style={styles.label}>{label}</p>
        </div>
    )
}



export default MenuButton
