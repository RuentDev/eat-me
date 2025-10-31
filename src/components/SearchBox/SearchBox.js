import './searchbox.css'

const SearchBox = ({handleSubmit, id, placeholder, containerStyle, inputStyle, onChange, value}) => {
    return (
        <form className="search-form" onSubmit={handleSubmit} style={{...containerStyle}}>
            <input 
                className="input-search" 
                name={id} 
                id={id} 
                type="text" 
                placeholder={placeholder}
                onChange={onChange}
                style={{...inputStyle}}
                value={value}
            />
            <button className='search-form-button' type="submit">Search</button>
        </form>
    )
}

export default SearchBox
