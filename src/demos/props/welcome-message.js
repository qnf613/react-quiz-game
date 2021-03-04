import "./welcome-message.css";
// components can take inputs in the form of props (or properies).
function WelcomeMessage(props){
    // const name = props.name;
    // const greeting = props.greeting;
    const {name, greeting} = props;
    // inside of JSX, {} allows us to insert a JS expression.
    return (<p className="welcome-message">{greeting}, {name}!</p>);
}

export default WelcomeMessage;
   