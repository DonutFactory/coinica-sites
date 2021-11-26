import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LockedStaking from "./LockedStaking";
import FlexibleStaking from "./FlexibleStaking";
import { FlexibleIcon, LockedIcon } from "../../Assets";

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: "650px",
    height: "400px",
    background: "linear-gradient(180deg, #263556 0%, #242D41 100%)",
    boxShadow: "0px 0px 6px #0F1223",
    padding: "50px 80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  option: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "150px"
  },
  flexibleHeader: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderBottom: "1px solid #57688D",
    paddingBottom: "15px",
  },
  flexibleInput: {
    width: "100%",
    marginTop: "20px",
  },
}));

const StakeCoinModal = ({ isOpen, onClose }) => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      {selectedOption === 0 ? (
        <Fade in={isOpen}>
          <div className={classes.container}>
            <div
              className={`${classes.row} hover-cursor`}
              style={{ borderBottom: "1px solid #57688D" }}
              onClick={() => setSelectedOption(1)}
            >
              <div className={classes.option}>
                <img
                  src={FlexibleIcon}
                  alt=""
                  width="60px"
                  height="60px"
                  style={{ marginRight: "15px" }}
                />
                <div>
                  <h2 style={{ margin: 0 }}>
                    Flexible
                  </h2>
                  <p style={{ color: "#9DC8EF"}}>No multiplier rewards available.</p>
                </div>
              </div>
              <div className="hover-cursor">
                <ArrowForwardIosIcon />
              </div>
            </div>
            <div
              className={`${classes.row} hover-cursor`}
              onClick={() => setSelectedOption(2)}
            >
              <div className={classes.option}>
                <img
                  src={LockedIcon}
                  alt=""
                  width="35px"
                  height="60px"
                  style={{ marginRight: "40px" }}
                />
                <div>
                  <h2 style={{ margin: 0 }}>
                    Locked
                  </h2>
                  <p style={{ color: "#9DC8EF"}}>Increases your pool weighting by up to 2x.</p>
                </div>
              </div>
              <div className="hover-cursor">
                <ArrowForwardIosIcon />
              </div>
            </div>
          </div>
        </Fade>
      ) : selectedOption === 1 ? (
        <FlexibleStaking
          setSelectedOption={(val) => setSelectedOption(val)}
        />
      ) : selectedOption === 2 ? (
        <LockedStaking
          setSelectedOption={(val) => setSelectedOption(val)}
        />
      ) : <span>Error</span>}
    </Modal>
  )
}

export default StakeCoinModal;