import React from 'react'

function Idinput({title,value,setValue}) {
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div className="identification-box">
            <label>{title}</label>
            <input className="correct-input" type="text" value={value} onChange={handleChange} />
        </div>
    )
}

export default Idinput
