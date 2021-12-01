import { useEffect, useState } from "react";
import coinica from "../../assets/image/coinica.png";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./Header.module.scss";
// import { Link, useHistory } from "react-router-dom";

const Header = () => {
  // const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
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

  const headerPositionFixed = () => {
    return scrollY > 100 ? styles.header__positionFixed : "";
  };

  return (
    <header className={styles.header}>
      <div
        className={[styles.header__position, headerPositionFixed()].join(" ")}
      >
        <div className={styles.header__content}>
          <a href="/" className={styles.header__content__logo}>
            <img src={coinica} width="auto" height="50" alt="logo" />
          </a>
          <nav
            className={`${styles.header__content__nav} ${
              menuOpen && size.width < 768 ? styles.isMenu : ""
            }`}
          >
            <ul>
              <li>
                <a href="https://staking.coinica.net/">Overview</a>
              </li>
              <li>
                <a href="https://staking.coinica.net/pools">Staking</a>
              </li>
              <li>
                <a href="https://staking.coinica.net/rewards">Rewards</a>
              </li>
              <li>
                <a href="https://staking.coinica.net/vesting">Vesting</a>
              </li>
            </ul>
            <button onClick={loginHandler}>Log In</button>
          </nav>
          <div className={styles.header__content__toggle}>
            {!menuOpen ? (
              <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
