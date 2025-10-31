import React from 'react';

const IconButton = ({label, icon, buttonStyle}) => {

    const styles = {
        button: {
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-evenly', 
            width: '150px', 
            height: '50px',
            cursor: 'pointer',
            ...buttonStyle
        }
    }

    return (
        <div style={styles.button} id='button'>
            {icon}
            {label}
        </div>
    )
    
}



export default IconButton
