
import { FONTS } from '../constants'

const TextAreaInput
 = ({ 
    label = "", 
    labelStyle,
    icon,  
    id, 
    errorText, 
    containerStyle, 
    inputStyle,
    cols= "30",
    rows= "10",
    textValue = "", 
    onchange,  
    placeholder, 
    maxLength = 255,
    required
}) => {
    
    
    
    const styles = {
        container: {
            borderBottom: '1px solid #f1f1f1',
            margin: '1rem 0',
            ...containerStyle
        },
        label: {
            ...FONTS.h5, 
            fontSize: '1rem',
            fontWeight: '800',
            ...labelStyle
        },
        inputContainer: {
            margin: '.5rem 0'
        },
        textarea: {
            ...FONTS.body5,
            border: 'none',
            outline: 'none',
            width: '100%',
            padding: '.5rem',
            borderRadius: "5px",
            ...inputStyle,
        },
    }

    return (
        <>
            <div
                style={styles.container}
            >
                <label htmlFor={id} style={styles.label} >{label}</label>
                <div style={styles.inputContainer} >
                    {icon}
                    <textarea 
                        id={id}
                        name={id} 
                        cols={cols}
                        rows={rows}
                        onChange={onchange}
                        style={styles.textarea}
                        placeholder={placeholder}
                        value={textValue}
                        required={required}
                        maxLength={maxLength}
                        placeholder={placeholder}
                    />
                </div>
            <p className='text-danger'>{errorText}</p>
            </div>
        </>
    )
}

export default TextAreaInput

