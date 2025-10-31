
import { COLORS } from '../constants'


const Button = ({label, containerStyle, onClick}) => {
    return (
        <div 
            id='button'
            style={{
                padding: '1rem',
                backgroundColor: COLORS.primary, 
                alignItems: 'center', 
                justifyContent: 'center', 
                display: 'flex',
                borderRadius: '25px',
                color: COLORS.white,
                cursor: 'pointer',
                // flexWrap: 'wrap',
                ...containerStyle
            }}
            onClick={onClick}
        >
            {label}
        </div>
    )
}

export default Button
