import React, { useState } from "react";
import moment from "moment";
import styles from "./Footer.module.scss";
import {
  Box,
  Modal,
  Fade,
  Typography,
  Backdrop,
  Paper,
} from "@material-ui/core";
import TermsOfUse from "./TermsOfUse";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  const handleTermsClose = () => {
    setOpenTerms(false);
  };

  const handlePrivacyClose = () => {
    setOpenPrivacy(false);
  };

  const getYear = () => {
    const currentYear = moment().year();
    return `${currentYear - 1}-${currentYear}`;
  };

  return (
    <>
      <Modal
        open={openTerms}
        onClose={handleTermsClose}
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        closeAfterTransition
        className={`${styles.modal}`}
      >
        <Fade in={openTerms}>
          <Paper elevation={3} className={`${styles.modal_content}`}>
            <TermsOfUse closeModal={handleTermsClose} />
          </Paper>
        </Fade>
      </Modal>
      <Modal
        open={openPrivacy}
        onClose={handlePrivacyClose}
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        closeAfterTransition
        className={`${styles.modal}`}
      >
        <Fade in={openPrivacy}>
          <Paper elevation={3} className={`${styles.modal_content}`}>
            <PrivacyPolicy closeModal={handlePrivacyClose} />
          </Paper>
        </Fade>
      </Modal>
      <Box className={`${styles.coinica_footer}`}>
        <Typography align="center" variant="subtitle2">
          <a
            className={`${styles.modal_link}`}
            onClick={() => setOpenTerms(true)}
          >
            Terms of Use
          </a>{" "}
          |{" "}
          <a
            className={`${styles.modal_link}`}
            onClick={() => setOpenPrivacy(true)}
          >
            Privacy Policy
          </a>
          <br />
          <i>{getYear()} Coinica, All rights reserved</i>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
