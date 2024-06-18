import React from 'react';
import "./button_3.css"
const Button3 = ({text, onClick}) => {
    return (
        <button class="Btn3" onClick={onClick}>
  
            <div class="sign">+</div>
            
            <div class="text">{text}</div>
        </button>
    );
}

export default Button3;
