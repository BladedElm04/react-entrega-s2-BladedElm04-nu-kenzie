export const Input = ( {label, id, type, placeholder, value, setValue, span }) => {
    return (
    <>
        <label className="body" htmlFor={id}>{label}</label>
        <div>
            <input required className="headline" id={id} name={id} type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}/>
            <span className="body">{span}</span>
        </div>
    </>    
    )
}