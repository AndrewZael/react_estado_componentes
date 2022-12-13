const Input = ({ name, placeholder, label, setValue, type = 'text' }) => {
    return(
        <div className="mb-3">
            <label form={'input-' + name} className="small">{label}</label>
            <input onChange={(e) => {
                setValue(e.target.value)
            }}
                id={'input-' + name} 
                type={type}
                name={name} 
                placeholder={placeholder} className="form-control w-100"
            />
        </div>
    );
}

export default Input;