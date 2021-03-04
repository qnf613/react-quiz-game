import "./speak-button.css";

function AlertButton({buttonText = "Alert.", alertMessage}){

    const alertInWeb = () => {
        alert(alertMessage);
    }

    return (
    <button className="speak-button" onClick={alertInWeb}>
        {buttonText}
    </button>
    );
}

export default AlertButton;