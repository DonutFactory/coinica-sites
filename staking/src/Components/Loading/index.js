import { Backdrop, CircularProgress } from "@material-ui/core";
import styles from "./Loading.module.scss";


const Loading = ({ isLoading, sideBarOpen }) => {
  const addPadding = sideBarOpen ? styles.paddingRight : "";
  return (
    <Backdrop
      className={[styles.container, addPadding].join(" ")}
      open={isLoading}
    >
      <div>
        <CircularProgress color="inherit" />
      </div>
    </Backdrop>
  );
};

export default Loading;
