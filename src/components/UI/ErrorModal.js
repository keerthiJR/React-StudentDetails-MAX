import Wrapper from "../Helper/Wrapper";
import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css'
const ErrorModal = (props) => {
    return (
        <Wrapper>
            <div className={classes.backdrop} onClick={props.clickHandler}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.clickHandler}>okay</Button>
                </footer>
            </Card>
        </Wrapper>
    );
}

export default ErrorModal;