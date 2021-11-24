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
import { CoinicaStakingIcon, RewardsIcon } from "./Assets";
import styles from "./Rewards.module.scss";

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

const createData = (name, amount, totalVesting, isApproved) => {
  return { name, amount, totalVesting, isApproved };
}

const rows = [
  createData('CCA', "131.44", "1", false),
  createData('CCA', "131.44", "1", false),
  createData('CCA', "131.44", "1", true),
];

const ButtonStyle = {
  marginRight: "10px",
  width: "150px",
  background: "#1785EB",
  borderRadius: "10px",
  textTransform: "none",
  filter: "drop-shadow(0px 0px 4px #0F1223)",
}

const Rewards = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])
  return (
    <Grid container className={styles.container}>
      <Box className={styles.mainheaderContainer}>
        <Box className={styles.mainheaderContent}>
          <img src={RewardsIcon} alt="Rewards" />
          <Box className={styles.content}>
            <h1>Rewards</h1>
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
                <StyledTableCell align="center">Total Vesting</StyledTableCell>
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
                  <StyledTableCell align="center">{row.totalVesting}</StyledTableCell>
                  <StyledTableCell align="left" style={{ display: "flex" }}>
                    {row.isApproved ? (
                      <Button
                        variant="contained"
                        color="primary"
                        style={ButtonStyle}
                      >
                        Claim $CCA
                      </Button>  
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        style={ButtonStyle}
                      >
                        Claim $CCA
                      </Button>  
                    )}
                    <Button
                      variant="contained"
                      color="secondary"
                      style={ButtonStyle}
                    >
                      Claim sCCA
                    </Button>  
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Grid>
  );
};

export default Rewards;
