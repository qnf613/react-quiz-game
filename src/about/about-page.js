import "./about-page.css";
import animationImage from "../images/gary.gif";

function AboutPage() {
  return (
    <main>
      <h1>About Me</h1>
      <h2>Eric Kwon</h2>
      <p>
        We're learning HTML <em>together</em>!
      </p>

      <p>Some things I've been doing lately:</p>
      <ul className="emoji-list">
        <li>Learning to make sauerkraut</li>
        <li>Cooking my wat through a cookbook</li>
        <li>Making cold brew</li>
      </ul>
      <p>Some languages I am going to be using:</p>
      <ul className="emoji-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>TS</li>
        <li>React</li>
      </ul>

      <p>Demo list:</p>
      <ul>
        <li>some</li>
        <li>other</li>
        <li>stuff</li>
      </ul>

      <p>
        An app I used daily is{" "}
        <a
          href="https://todoist.com/"
          target="_blank"
          title="Software recommendation"
        >
          Todolist
        </a>
        .
      </p>
      <img
        src={animationImage}
        id="image-Gary"
        alt="Gary the Snail"
        width="300"
      />

      <h3>Link to my Portfolio site.</h3>
      <a href="https://erickwon.weebly.com/" title="Portfolio">
        Click Here
      </a>

      <p>Click on the play button to play/stop the music:</p>

      {/* <audio cite="https://www.bensound.com/royalty-free-music/track/funny-song" controls>
              <source src="../audios/funnysong.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio> */}
    </main>
  );
}

export default AboutPage;
