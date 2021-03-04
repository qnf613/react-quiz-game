import { useState } from "react";
import Confetti from "react-confetti";

function ConfettiDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [numParticles, setNumParticles] = useState(200);
  const [numGravity, setGravity] = useState(0.2);
  const [numWind, setWind] = useState(0.05);

  const toggleConfetti = () => setIsRunning(!isRunning);
  const onParticlesChange = (event) => {
    const newNumParticles = parseInt(event.target.value, 10);
    setNumParticles(newNumParticles);
  };
  const onGravityChange = (event) => {
    const newNumGravity = parseFloat(event.target.value, .01);
    setGravity(newNumGravity );
  };
  const onWindChange = (event) => {
    const newNumWind = parseFloat(event.target.value, .01);
    setWind(newNumWind);
  };

  const buttonText = isRunning ? "Turn Confetti Off" : "Turn Confetti On";

  return (
    <div>
      <div>
        <label htmlFor="num-particles">Num Particles:</label>
        <input
          type="range"
          id="num-particles"
          min="1"
          max="3000"
          step="1"
          value={numParticles}
          onChange={onParticlesChange}
        ></input>
      </div>
      <div>
        <label htmlFor="num-gravity">Gravity:</label>
        <input
          type="range"
          id="num-gravity"
          min="0"
          max="1"
          step=".01"
          value={numGravity}
          onChange={onGravityChange}
        ></input>
      </div>
      <div>
        <label htmlFor="num-wind">Wind:</label>
        <input
          type="range"
          id="num-wind"
          min="-1"
          max="1"
          step=".1"
          value={numWind}
          onChange={onWindChange}
        ></input>
      </div>
      <div>
        <button onClick={toggleConfetti}>{buttonText}</button>
        <Confetti
          numberOfPieces={numParticles}
          gravity={numGravity}
          wind={numWind}
          run={isRunning}
          confettiSource={{x:window.innerWidth / 2, y:window.innerHeight / 2}}
          colors={['#fff44f', '#00ff00', '#7fffd4']}
        />
      </div>
    </div>
  );
}

export default ConfettiDemo;
