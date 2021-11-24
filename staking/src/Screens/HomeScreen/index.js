import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box, Grid, Button } from "@material-ui/core";
import Chart from 'react-apexcharts'
import {
  CoinicaStakingIcon,
  StakingIcon,
  RewardsIcon,
  DiscordIcon,
  TwitterIcon,
  TelegramIcon,
  FacebookIcon
} from "./Assets";
import styles from "./HomeScreen.module.scss";

var options = {
  chart: {
    height: 280,
    type: "radialBar",
  },
  series: [27],
  colors: ["#1752EB"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "65%",
        background: "transparent"
      },
      track: {
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15,
        },
        background: "#1B2539",
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#57688D",
          fontSize: "14px"
        },
        value: {
          offsetY: 5,
          color: "#79B9F4",
          fontSize: "22px",
          fontWeight: 700,
          show: true,
          formatter: () => {
            return "$924.12k"
          }
        },
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#1785EB"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Total Distributed"]
};

const HomeScreen = () => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <Grid container className={styles.container}>
      <Box className={styles.mainheaderContainer}>
        <Grid container className={styles.mainheader}>
          <Grid item xs={12} md={5} className={styles.main_icon}>
            <img src={CoinicaStakingIcon} alt="" />
          </Grid>
          <Grid item xs={12} md={7} className={styles.main_desc}>
            <h2>Coinica Staking</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliqu
            </p>
          </Grid>
        </Grid>
      </Box>
      <Box className={styles.subheaderContainer}>
        <Grid container className={styles.subheader}>
          <Grid item xs={12} md={6} className={styles.totalStaked}>
            <Box className={styles.totalStakedlabel}>
              <span>Total Amount Staked</span>
            </Box>
            <h2>$1,204,430,249,00</h2>
          </Grid>
          <Grid item xs={12} md={6} className={styles.CCAprice}>
            <Box className={styles.CCAlabel}>
              <img src={CoinicaStakingIcon} alt="" width="30px" height="30px" />
              <span>CCA Price</span>
            </Box>
            <h2>$24,056.09</h2>
          </Grid>
        </Grid>
      </Box>
      <Box className={styles.stakeRewardContainer}>
        <Box className={styles.stake_reward}>
          <Box className={styles.stake}>
            <Box textAlign="center">
              <img src={StakingIcon} alt="" />
              <h1>Stake</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipi elit,  sed do eiusmod tempor incididunt ut labor.</p>
              <Button variant="contained" color="primary" onClick={() => history.push("/pools")}>
                Stake Coin
              </Button>
            </Box>
          </Box>
          <Box className={styles.reward}>
            <Box textAlign="center">
              <img src={RewardsIcon} alt="" />
              <h1>Rewards</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipi elit,  sed do eiusmod tempor incididunt ut labor.</p>
              <Button variant="contained" color="primary" onClick={() => history.push("/rewards")}>
                View Rewards
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.ccaRewardsAndVestingContainer}>
        <Box className={styles.ccaRewardsAndVesting}>
          <Box className={styles.ccaRewards}>
            <Box textAlign="center">
              <Chart
                options={options}
                series={options.series}
                type="radialBar"
                width={400}
                height={256}
              />
              <h1>CCA Rewards</h1>
            </Box>
            <Box className={styles.ccaRewardsValue}>
              <Box textAlign="left">
                <small>CCA Value</small>
                <br />
                <span>$905.78M</span>
              </Box>
              <Box textAlign="left">
                <small>sCCA Value</small>
                <br />
                <span>$905.78M</span>
              </Box>
            </Box>
          </Box>
          <Box className={styles.vesting}>
            <Box textAlign="center">
              <img src={StakingIcon} alt="" />
              <h1>Vesting</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipi elit,  sed do eiusmod tempor incididunt ut labor.</p>
              <Button variant="contained" color="primary" onClick={() => history.push("/vesting")}>
                View Rewards
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.socialSitesContainer}>
        <Box className={styles.socialSites}>
          <img className="hover-cursor" src={DiscordIcon} alt="Discord" />
          <img className="hover-cursor" src={TwitterIcon} alt="Twitter" />
          <img className="hover-cursor" src={TelegramIcon} alt="Telegram" />
          <img className="hover-cursor" src={FacebookIcon} alt="Facebook" />
        </Box>
      </Box>
    </Grid>
  );
};

export default HomeScreen;
