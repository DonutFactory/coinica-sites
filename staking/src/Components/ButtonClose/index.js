import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import styles from "./ButtonClose.module.scss";

const CloseButton = ({ handleClick }) => {
    return(
        <Button variant='contained' color='secondary' className={`${styles.button_close}`} onClick={() => handleClick()}>
            <Close />
        </Button>
    );
};

export default CloseButton;