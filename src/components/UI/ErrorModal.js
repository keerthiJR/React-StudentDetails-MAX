import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css'
const ErrorModal = (props) => {

    const ErrorModalhandler = () =>{
        props.clickHandler()
    }
    return (
        <div>
            <div className={classes.backdrop} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={ErrorModalhandler}>okay</Button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;