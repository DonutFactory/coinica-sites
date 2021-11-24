import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { CssBaseline} from "@material-ui/core";
import Loading from "../Loading";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.scss";
import "react-toastify/dist/ReactToastify.css";

const Layout = (props) => {
  const { isLoading, path } = props;
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <div className={`${styles.wrapper}`}>
        <Loading isLoading={isLoading} />
        {/* page content */}
        <Header path={path} />
        <div className={`${styles.page_content}`}>
          <div className={`${styles.container}`}>{props.children}</div>
          <Footer />
        </div>
      </div>
    </StylesProvider>
  );
};

export default Layout;
