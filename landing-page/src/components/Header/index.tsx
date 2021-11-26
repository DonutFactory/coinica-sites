import { useEffect, useState } from "react";
import coinica from "../../assets/image/coinica.png";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
// import { Link, useHistory } from "react-router-dom";

const Header = () => {
  // const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const loginHandler = () => {
    //  menuToggleHandler();
    //  history.push("/login);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <a href="/" className={classes.header__content__logo}>
          <img src={coinica} width="auto" height="50" alt="logo" />
        </a>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <a href="/" onClick={menuToggleHandler}>
                Overview
              </a>
            </li>
            <li>
              <a href="/" onClick={menuToggleHandler}>
                Staking
              </a>
            </li>
            <li>
              <a href="/" onClick={menuToggleHandler}>
                Rewards
              </a>
            </li>
            <li>
              <a href="/" onClick={menuToggleHandler}>
                Vesting
              </a>
            </li>
          </ul>
          <button onClick={loginHandler}>Log In</button>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
