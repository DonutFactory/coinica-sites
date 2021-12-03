import React, { useContext, useEffect, useState } from "react";
import coinica from "../../assets/image/coinica.png";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import {
  getProvider,
  ethEnabled,
  getChainId,
  getAccounts,
  onAccountChange,
  onChainChange,
} from "../../services/metamask";
import { AppCtx } from "../../App";
import styles from "./Header.module.scss";
// import { Link, useHistory } from "react-router-dom";

interface CtxProps {
  chainId?: any;
  setChainId?: Function;
  setWallet?: Function;
  wallet?: any;
  address?: any;
  setAddress?: Function;
  balance?: any;
  setBalance?: Function;
}

type Props = {
  scrollTo: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

const Header = ({ scrollTo }: Props) => {
  const context = useContext<CtxProps>(AppCtx);
  const currConnectedAdd = context?.address;
  console.log({ context });

  // const history = useHistory();
  const [loading, setLoading] = useState(false);
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

  const handleAccountsChanged = (accounts: any) => {
    if (
      typeof context.setAddress === "function" &&
      typeof context.setBalance === "function"
    ) {
      if (accounts.length === 0) {
        context.setAddress(null);
      } else if (accounts[0] !== currConnectedAdd) {
        context.setAddress(accounts[0]);
      }
    }
  };

  const loginHandler = async () => {
    //  menuToggleHandler();
    //  history.push("/login);
    const provider = await getProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        alert(
          "Can't connect to MetaMask. Do you have multiple wallets installed?"
        );
      } else {
        if (!(await ethEnabled())) {
          return;
        }

        if (typeof context.setWallet === "function") {
          context.setWallet(provider);
        }

        /********************************************/
        /* Handle chain (network) and chainChanged  */
        /********************************************/
        getChainId(
          [],
          (response: any) => {
            if (response !== "0x4") {
              alert("Please connect to Rinkeby Test Network");
              window.location.reload();
            }
            console.log({ getChainId: response });
            if (typeof context.setChainId === "function") {
              context.setChainId(response);
            }
          },
          (err: any) => {
            console.log({ getChainIdErr: err });
            if (typeof context.setChainId === "function") {
              context.setChainId(null);
            }
          }
        );

        /*******************************/
        /* Access the user's accounts  */
        /*******************************/
        getAccounts(
          [],
          (accounts: any) => {
            handleAccountsChanged(accounts);
          },
          (err: any) => {
            console.log({ getAccountsErr: err });
            if (err.code === 4001) {
              // EIP-1193 userRejectedRequest error
              // If this happens, the user rejected the connection request.
              alert("Please connect to MetaMask");
            } else {
              alert("Error occured in connecting to MetaMask");
              console.error({ getAccountsError: err });
            }
          }
        );

        onAccountChange(handleAccountsChanged);
        onChainChange(() => {
          window.location.reload();
        });
      }
    } else {
      alert("Install metamask extension");
    }
  };
  // const loginHandler = () => {
  //  menuToggleHandler();
  //  history.push("/login);
  // };

  const headerNavHeight = () => {
    return scrollY > 100 ? styles.header__scrolledNavHeight : "";
  };

  return (
    <header className={styles.header}>
      <div className={[styles.header__position, headerNavHeight()].join(" ")}>
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
                <a href="#/" onClick={(e) => scrollTo(e)}>
                  Presale
                </a>
              </li>
              {/* <li>
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
              </li> */}
            </ul>
            <button onClick={loginHandler}>
              {loading
                ? "Connecting..."
                : currConnectedAdd
                ? `0x..${currConnectedAdd.slice(-7)}`
                : "Connect Wallet"}
            </button>
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
