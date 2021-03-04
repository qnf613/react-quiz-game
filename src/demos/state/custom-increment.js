import { useState } from "react";


function CustomIncrement(){

    const [increment, setIncrement] = useState(1);
    const [valueText, setValue] = useState(0);


    const onIncrementChange = (e) => setIncrement(parseInt(e.target.value));
    const onButtonClick = () =>{
        setValue(valueText + increment);
    };

    const text = increment >= 0 ? "Add" : "Substract";

    const reset = () =>{
        setValue(0);
        setIncrement(1);
    }    
    
    return(
        <div>
            <div>
                <label htmlFor="value">The current value is: {valueText}</label>
            </div>
            <div>
                <label htmlFor="incrementText">The current increment is: {increment}</label>
            </div>
            <div>
                <label htmlFor="increment">Increment:</label>
                <input id="increment" type="range" min="-100" max="100" stop="0" value={increment} onChange={onIncrementChange}/>
            </div>
            <button onClick={onButtonClick}>{text} {increment}</button>  <button onClick={reset}>Reset</button>

        </div>
    );
}

export default CustomIncrement;