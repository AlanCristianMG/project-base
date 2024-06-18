import React from 'react';
import "./button_5.css"

const Button5 = ({text, onClick}) => {
    return (
        <button class="button_5">
            <span class="button_5-content">{text}</span>
        </button>
    );
}

export default Button5;
