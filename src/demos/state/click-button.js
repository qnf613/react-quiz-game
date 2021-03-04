import { useState } from "react";

function ClickButton(){
    // array destructuring demo:
    // const animals = ["cat", "dog", "dragon"];
    // const [animal1, animal2, animal3] = animals;
    // console.log(animal1);
    // console.log(animal3);

    // [ should not code this this  
    //   let showButton = false;
    //   if(showButton){
    //   const [numClicks, setNumClicks] = useState(0);
    // [ }                          

    // useState returns back an array that looks like: [currentValue, setterFunction]
    const [numClicks, setNumClicks] = useState(0);

    const onButtonClick = () =>{
        setNumClicks(numClicks + 1);
    };

        // don't mutate state variable directly:
        // numClicks += 1;
    const clickEmoji = "🧨".repeat(numClicks);
    // let text = "";
    // if (numClicks === 0) text = "You haven't clicked yet. Click me!";
    // else text = `You've clicked: ${clicksEmoji}`;
    const text = numClicks === 0 ? "You haven't clicked yet. Click me!" : `You've clicked: ${clickEmoji}`;

    // setting style from JS is useful for dynamic properties.
    const buttonStyle = {
        width: "10rem", 
        minHeight: "10rem",
        transform: `rotate(${numClicks * 25}deg)`,
        transition: "all 0.2s"
    }


    return (<button style={buttonStyle} onClick={onButtonClick}>
        {text}
        </button>);
}

export default ClickButton;