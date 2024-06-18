import React from 'react';
import './inputr1.css';

const Input1 = (name ,type , placeholder, text="", label) => {
    return(
        <div>
        <label for={name}>{label}</label>
        <input name={name} type={type} placeholder={placeholder}>{text}</input>
        </div>
    )
}

export default Input1;