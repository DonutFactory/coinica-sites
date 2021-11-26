import React, { useEffect } from "react";
import { Box, Grid, Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CoinicaStakingIcon, StakingIcon } from "./Assets";
import styles from "./Vesting.module.scss";

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: "#79B9F4",
    borderBottom: "1px solid #57688D",
  },
  body: {
    color: "#79B9F4",
    border: 0,
  },
}))(TableCell);

const createData = (name, amount, weight, unlocksIn, source, isLocked, isApproved) => {
  return { name, amount, weight, unlocksIn, source, isLocked, isApproved };
}

const rows = [
  createData('CCA', "131.44", "2.00", "11 Months", "Deposit", true, true),
  createData('CCA', "131.44", "2.00", "11 Months", "Yield", true, true),
  createData('CCA', "131.44", "2.00", "11 Months", "Yield", true, true),
];

const ButtonStyle = {
  marginRight: "10px",
  width: "150px",
  background: "#1785EB",
  borderRadius: "10px",
  textTransform: "none"
}
const DisabledButtonStyle = {
  color: "#57688D",
  marginRight: "10px",
  width: "150px",
  background: "#263556",
  borderRadius: "10px",
  textTransform: "none",
  filter: "drop-shadow(0px 0px 4px #0F1223)",
}

const Vesting = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])
  return (
    <Grid container className={styles.container}>
      <Box className={styles.mainheaderContainer}>
        {/* <Grid container className={styles.mainheader}> */}
        <Box className={styles.mainheaderContent}>
          <img src={StakingIcon} alt="Rewards" />
          <Box className={styles.content}>
            <h1>Vesting</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </Box>
        </Box>
        <TableContainer component={Paper} className={styles.mainheaderTable} >
          <Table aria-label="pools table" style={{ width: "unset", margin: "0 auto" }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Pools</StyledTableCell>
                <StyledTableCell align="center">Amount</StyledTableCell>
                <StyledTableCell align="center">Weight</StyledTableCell>
                <StyledTableCell align="center">Unlocks in</StyledTableCell>
                <StyledTableCell align="center">Source</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow key={idx}>
                  <StyledTableCell component="th" scope="row">
                    <Box style={{ display: "flex", alignItems: "center" }}>
                      <img src={CoinicaStakingIcon} alt="" width="40px" style={{ marginRight: "5px" }} />
                      {row.name}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.amount}</StyledTableCell>
                  <StyledTableCell align="center">{row.weight}</StyledTableCell>
                  <StyledTableCell align="center">{row.unlocksIn}</StyledTableCell>
                  <StyledTableCell align="center">{row.source}</StyledTableCell>
                  <StyledTableCell align="left" style={{ display: "flex" }}>
                    {row.isApproved ? (
                      row.isLocked ? (
                        <Button
                          variant="contained"
                          color="primary"
                          style={DisabledButtonStyle}
                          disabled
                        >
                          Locked
                        </Button> 
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          style={ButtonStyle}
                        >
                          Claim
                        </Button> 
                      )
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        style={ButtonStyle}
                      >
                        Approve
                      </Button>  
                    )}
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* </Grid> */}
      </Box>
    </Grid>
  );
};

export default Vesting;
