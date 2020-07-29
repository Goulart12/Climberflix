import React from 'react';

function FormTextArea({ label, type, name, value, onChange }) {
    return (
        <div>
            <label>
                {label}: 
                <textarea
                    type={type}
                    name={name}
                    value={value} 
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormTextArea;