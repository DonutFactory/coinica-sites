import React, { useContext, useEffect, useState } from "react";
// import { Link, useHistory } from "react-router-dom";
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
import { AppCtx } from "screens/Home";
import styles from "./Header.module.scss";
import coinica from "../../assets/image/coinica.png";
import { Link } from "react-router-dom"

// import { ChainId, Token, WETH, Fetcher, Route } from "@uniswap/sdk";
// import { ethers } from "ethers";
// import { Address } from "cluster";
// import { Pool } from "@uniswap/v3-sdk";
// import { Token } from "@uniswap/sdk-core";
// import { abi as IUniswapV3PoolABI } from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";

// const INFURA_PROJECT_ID = "94463d3e532442219d56aaaa4ea6de82"; // this should be hidden

// const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`);
// const poolAddress = "0x79D9099251005F95a526ef5265BBC58Fc2E89Cf1";
// const poolContract = new ethers.Contract(
//   poolAddress,
//   IUniswapV3PoolABI,
//   provider
// );

// console.log({ provider, poolAddress, poolContract })

// const web3 = new Web3(
//   new Web3.providers.HttpProvider(
//     `https://:${INFURA_PROJECT_KEY}@rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`
//   )
// );

// const CNCA = new Token(
//   ChainId.RINKEBY,
//   "0x5b7436a078ea1e7cd0d2abc22a178f7865841787",
//   18
// );

declare global {
  interface Window {
    web3: any;
  }
}

// interface Immutables {
//   factory: string;
//   token0: string;
//   token1: string;
//   fee: number;
//   tickSpacing: number;
//   maxLiquidityPerTick: ethers.BigNumber;
// }

// interface State {
//   liquidity: ethers.BigNumber;
//   sqrtPriceX96: ethers.BigNumber;
//   tick: number;
//   observationIndex: number;
//   observationCardinality: number;
//   observationCardinalityNext: number;
//   feeProtocol: number;
//   unlocked: boolean;
// }

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

// const getPoolImmutables = async() => {
//   const [factory, token0, token1, fee, tickSpacing, maxLiquidityPerTick] =
//     await Promise.all([
//       poolContract.factory(),
//       poolContract.token0(),
//       poolContract.token1(),
//       poolContract.fee(),
//       poolContract.tickSpacing(),
//       poolContract.maxLiquidityPerTick(),
//     ]);

//   const immutables: Immutables = {
//     factory,
//     token0,
//     token1,
//     fee,
//     tickSpacing,
//     maxLiquidityPerTick,
//   };
//   return immutables;
// }

// const getPoolState = async() => {
//   const [liquidity, slot] = await Promise.all([
//     poolContract.liquidity(),
//     poolContract.slot0(),
//   ]);

//   const PoolState: State = {
//     liquidity,
//     sqrtPriceX96: slot[0],
//     tick: slot[1],
//     observationIndex: slot[2],
//     observationCardinality: slot[3],
//     observationCardinalityNext: slot[4],
//     feeProtocol: slot[5],
//     unlocked: slot[6],
//   };

//   return PoolState;
// }

const Header = ({ scrollTo }: Props) => {
  const context = useContext<CtxProps>(AppCtx);
  const currConnectedAdd = context?.address;

  const [loading, setLoading] = useState(false);
  // const history = useHistory();
  // const [isFetchingRate, setIsFetchingRate] = useState(true);
  // const [CNCA_to_WETH, setCNCA_to_WETH] = useState<any>(null); // 1 CNCA to WETH
  // const [WETH_to_CNCA, setWETH_to_CNCA] = useState<any>(null); // 1 WETH to CNCA

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

  const fetchUniswapExchangeRate = async() => {
    try {
      /**
       * ******************
       *     UNISWAP-V2   *
       * ******************
       */
      // const pair = await Fetcher.fetchPairData(CNCA, WETH[CNCA.chainId]);
      // const route = new Route([pair], WETH[CNCA.chainId]);
      // const weth_to_cnca_rate = route.midPrice.toSignificant(6);
      // const cnca_to_weth_rate = route.midPrice.invert().toSignificant(6);

      // setWETH_to_CNCA(weth_to_cnca_rate);
      // setCNCA_to_WETH(cnca_to_weth_rate);

      // setIsFetchingRate(true);

      /**
       * ******************
       *     UNISWAP-V3   *
       * ******************
       */
      // const [immutables, state] = await Promise.all([
      //   getPoolImmutables(),
      //   getPoolState(),
      // ]);

      // const USDC = new Token(3, immutables.token0, 6, "USDC", "USD Coin");
      // const WETH = new Token(3, immutables.token1, 18, "WETH", "Wrapped Ether");

      // const poolExample = new Pool(
      //   USDC,
      //   WETH,
      //   immutables.fee,
      //   state.sqrtPriceX96.toString(),
      //   state.liquidity.toString(),
      //   state.tick
      // );
      // console.log({ poolExample });


      // const WETH_USDC_POOL = new Pool(
      //   WETH,
      //   USDC,
      //   immutables.fee,
      //   state.sqrtPriceX96.toString(),
      //   state.liquidity.toString(),
      //   state.tick
      // );
      
      // const token0Price = WETH_USDC_POOL.token0Price.toSignificant(6);
      // const token1Price = WETH_USDC_POOL.token1Price.toSignificant(6);
      // console.log({ token0Price, token1Price })
    } catch (e) {
      console.log({ ERROR_FETCHING_RATE: e })
    }
  }

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
                {/* <a href="#/" onClick={(e) => scrollTo(e)}>
                  Presale
                </a> */}
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
            {/* <button onClick={loginHandler}>
              {loading
                ? "Connecting..."
                : currConnectedAdd
                ? `0x..${currConnectedAdd.slice(-7)}`
                : "Connect Wallet"}
            </button> */}
              <button>
                <a className="button-link" href="https://app.coinica.net/" target="_blank">
                Play Now
                </a>
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
