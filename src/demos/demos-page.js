import SpeakButton from "./props/speak-button";
import WelcomeMessage from "./props/welcome-message";
import ChatMessage from "./props/chat-message";
import AlertButton from "./props/alert-button";
import SocialPost from "./props/social-post";
import ClickButton from "./state/click-button";
import SpeakForm from "./state/speak-form";
import CustomIncrement from "./state/custom-increment";
import MusicalButton from "./dependencies/musical-button";
import ConfettiDemo from "./dependencies/confetti-demo";
import Todos from "./arrays/todos";
import RandomDogs from "./random-dogs";

function DemosPage(){
    return(
        <main>
        <h1>My First React App</h1>
        <h2>RandomDogsDemo</h2>
        <RandomDogs/>
        {/* <h2>Rendering Arrays</h2>
        <Todos/>
        <h2>ConfettiDemo</h2>
        <ConfettiDemo/>
        <h2>Tone.js Music</h2>
        <MusicalButton>Play Some Beats 🎧</MusicalButton>
        <h2>Custom Increment</h2>
        <CustomIncrement/>
        <h2>Speak Form</h2>
        <SpeakForm/>
        <h2>Stateful Buttons</h2>
        <ClickButton/>
        <h2>Welcome</h2>
        <WelcomeMessage name="Eric" greeting="Hello"/>
        <WelcomeMessage name="Jin" greeting="Howdy"/>
        <WelcomeMessage name="Class" />
        <h2>Buttons</h2> */}
        {/* values for properties can be any JS expression. */}
        {/* <SpeakButton message="Hello there!"/>
        <SpeakButton message="Speedy speed speed!" rate={3} pitch={2}></SpeakButton>
        <AlertButton alertMessage="You have clicked first alert button!"></AlertButton>
        <AlertButton alertMessage="You have clicked second alert button!"></AlertButton>
        <h2>Chat</h2>
        <ChatMessage message="Yo, how's React?" userName="PokeMike" date="02/13/21"/>
        <ChatMessage message="I think its going well... I guess" userName="Ricarto" date="02/14/21"/>
        <ChatMessage message="Props to you." userName="PokeMike" date="02/14/21"/>
        <ChatMessage message="Ha ha. You are not funny." userName="Ricarto" date="02/14/21"/>
        <h2>Social Media</h2>
        <SocialPost content="Um... can someone help me?" userName="WorseThanNewbie"/>
        <SocialPost content="Please stop upload your naked selfie guys." userName="CommunityManager"/> */}
      </main>

    );
}

export default DemosPage;