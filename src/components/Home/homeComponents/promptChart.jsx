import React from 'react';
import "./styles/promptChart.css"
import Button4 from '../../components_form/Buttons/button_4/button_4';

const PromptChart = () => {
    return (
        <div className='areaPrompt'>
            <input placeholder="Enter your text..." class="input_prompt" name="text" type="text"></input>
            <Button4/>
        </div>
    );
}

export default PromptChart;
