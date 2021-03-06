import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Hidden,
  Menu,
  MenuItem,
  withStyles
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  AccountCircle,
} from "@material-ui/icons"
import styles from "./Header.module.scss";

const NotLoggedIn = () => {
  return (
    <div>
      <Button
        variant="text"
        color="primary"
        className={styles.login_button}
      >
        Login
      </Button>
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      minHeight: '6vh',
      zIndex: theme.zIndex.drawer + 1,
      color: "#1785EB",
      backgroundColor: "#242D41",
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    menuButton: {
      marginRight: 5,
    },
    toolbar: {
      justifyContent: 'space-between',
      [theme.breakpoints.down(768)]:{
        paddingLeft: '5px',
      },
    },
  })
);

const StyledMenu = withStyles({
  paper: {
    background: "linear-gradient(180deg, #263556 11.53%, #242D41 86.09%)",
    color: "#79B9F4",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const Header = (props) => {
  const { path } = props;
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Box className={styles.navbtns}>
          <Hidden mdUp>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <StyledMenu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => history.push("/")}>Overview</MenuItem>
                <MenuItem onClick={() => history.push("/pools")}>Staking</MenuItem>
                <MenuItem onClick={() => history.push("/rewards")}>Rewards</MenuItem>
                <MenuItem onClick={() => history.push("/vesting")}>Vesting</MenuItem>
                <MenuItem onClick={handleClose}>Login</MenuItem>
              </StyledMenu>
            </div>
          </Hidden>
          <Hidden smDown>
            <Button
              variant="text"
              color="primary"
              className={styles.navbtn}
              style={{ color: path === "/" ? "#79B9F4" : "#57688D" }}
              onClick={() => {
                history.push("/")
              }}
            >
              Overview
            </Button>
            <Button
              variant="text"
              color="primary"
              className={styles.navbtn}
              style={{ color: path === "/pools" ? "#79B9F4" : "#57688D" }}
              onClick={() => {
                history.push("/pools")
              }}
            >
              Staking
            </Button>
            <Button
              variant="text"
              color="primary"
              className={styles.navbtn}
              style={{ color: path === "/rewards" ? "#79B9F4" : "#57688D" }}
              onClick={() => {
                history.push("/rewards")
              }}
            >
              Rewards
            </Button>
            <Button
              variant="text"
              color="primary"
              className={styles.navbtn}
              style={{ color: path === "/vesting" ? "#79B9F4" : "#57688D" }}
              onClick={() => {
                history.push("/vesting")
              }}
            >
              Vesting
            </Button>
            <Box border="1px solid #57688D" height="38px" margin="0 10px" />
            <NotLoggedIn />
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
