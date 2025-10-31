import { COLORS } from '../../constants'
import './inputsubmit.css'

const InputSubmit = ({
    buttonValue,
    onSubmit,
    isDisabled,

}) => {



    return (
        <input 
            className='input-submit'
            type="submit"
            value={buttonValue}
            onSubmit={onSubmit}
            disabled={isDisabled}
            style={{
                backgroundColor: isDisabled ? COLORS.gray : COLORS.primary,
                pointerEvents: isDisabled ? 'none' : null,
            }}
        />
    )
}

export default InputSubmit
