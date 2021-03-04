import { useState } from "react";

function SpeakForm(){

    const [message, setMessage] = useState("");
    const [rate, setRate] = useState(1);
    const [pitch, setPitch] = useState(1);

    // change event handler. it gets a event for the triggered change
    // const onMessageChange = (event) =>{
    //     const newMessage = event.target.value;
    //     setMessage(newMessage);
    // };
    const onMessageChange = (e) => setMessage(e.target.value);

    const onRateChange = (e) => setRate(parseFloat(e.target.value));

    const onPitchChange = (e) => setPitch(parseInt(e.target.value));

    const speak = () => {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.pitch = pitch;
        utterance.rate = rate;
        speechSynthesis.speak(utterance);
    }

    return (    
    <div>
        <div>
            <label htmlFor="message">Message:</label>
            <input id="message" type="text" value={message} onChange={onMessageChange}/>
        </div>
        <div>
            <label htmlFor="rate">Rate:</label>
            <input id="rate" type="range" min="0.1" max="10.1" stop="0.1" value={rate} onChange={onRateChange}/>
        </div>
        <div>
            <label htmlFor="pitch">Pitch:</label>
            <input id="pitch" type="range" min="0" max="2" stop="0.1" value={pitch} onChange={onPitchChange}/>
        </div>
        <button onClick={speak}>Speak 🔊</button>
    </div>
    );
}

export default SpeakForm;