export const Select = ({ label, id, value, option1, option2, setValue}) => {
    return (
        
    <>   
        <label className="body" htmlFor={id}>{label}</label>
        <select required name={id} id={id} value={value} onChange={(e) => setValue(e.target.value)}>
            <option value={option1}>{option1}</option>
            <option value={option2}>{option2}</option>
        </select>
    </>     
    )
}