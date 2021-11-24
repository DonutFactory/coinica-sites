import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import { LockedIcon } from "../../Assets";

const useStyles = makeStyles(() => ({
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

const LockedStaking = ({ setSelectedOption }) => {
  const classes = useStyles();
  const [lockPeriod, setLockPeriod] = useState(1);
  return (
    <div className={classes.container}>
      <div className={classes.flexibleHeader}>
        <ArrowBackIos
          className="hover-cursor"
          style={{ marginRight: "20px" }}
          onClick={() => setSelectedOption(0)}
        />
        <img
          src={LockedIcon}
          alt=""
          width="35px"
          height="60px"
          style={{ marginRight: "15px" }}
        />
        <div>
          <h4 style={{ margin: 0 }}>
            Locked
          </h4>
          <small style={{ color: "#9DC8EF"}}>Increases your pool weighting by up to 2x.</small>
        </div>
      </div>
      <div className={classes.flexibleInput}>
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#57688D", fontWeight: 600 }}>
              Lock for:{" "}
              <span style={{ color: "#9DC8EF" }}>
                {`${lockPeriod} ${lockPeriod > 1 ? "weeks" : "week"}`}
              </span>
            </span>
            <span style={{ color: "#57688D", fontWeight: 600 }}>
              Weight:{" "}
              <span style={{ color: "#9DC8EF" }}>
                2.0
              </span>
            </span>
          </div>
          <Slider
            defaultValue={1}
            value={lockPeriod}
            onChange={(e, val) => setLockPeriod(val)}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={52}
          />
        </div>
        <div style={{ textAlign: "right", marginBottom: "10px" }}>
          <span style={{ color: "#57688D", fontWeight: 600 }}>
            Balance:{" "}
            <span style={{ color: "#9DC8EF" }}>
              980
            </span>
          </span>
        </div>
        <TextField
          label="Enter amount"
          type="number"
          variant="outlined"
          InputLabelProps={{
            style: { color: '#FFFF' },
          }}
          InputProps={{
            style: { color: '#FFFF' },
          }}
          style={{
            width: "100%",
            background: "#0E131F",
            borderRadius: '5px',
          }}
        />
        <div style={{ textAlign: "right", marginTop: "10px" }}>
          <span style={{ color: "#57688D", fontWeight: 600 }}>
            Est APY:{" "}
            <span style={{ color: "#9DC8EF" }}>
              421.30%
            </span>
          </span>
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{
            width: "100%",
            height: "60px",
            marginTop: "20px",
          }}
        >
          Stake
        </Button>
      </div>
    </div>
  )
}

export default LockedStaking;
