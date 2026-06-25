import './Alert.css';

type AlertProps = {
    message: string;
}

function Alert({message}: AlertProps) {

    return (
        <div className="alert">
            <p>{message}</p>
        </div>
    )
}

export default Alert;