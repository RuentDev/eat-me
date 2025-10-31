import React, {useState, createContext} from 'react'

export const OptionMenuContext = createContext();

export const OptionMenuProvider = props => {
    
    const [selectedOption, setSelectedOption] = useState("all_products")

    return (
        <OptionMenuContext.Provider value={[selectedOption, setSelectedOption]}>
            {props.children}
        </OptionMenuContext.Provider>
    );
}