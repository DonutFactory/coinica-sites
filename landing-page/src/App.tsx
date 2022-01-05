import React, { useRef } from "react";
import { ChainId, Token, WETH, Fetcher, Route } from "@uniswap/sdk";
import thousandSeparator from "./helpers/thousandSeparator";
import FBMessengerChat from "./components/FBMessengerChat";
import bgGirl from "./assets/image/bg-girl.png";
import coinica from "./assets/image/coinica.png";
import logoMJ from "./assets/image/logo-mj.png";
import logoGQ from "./assets/image/logo-gq.png";
import logoTH from "./assets/image/logo-th.png";
import Header from "./components/Header";
import ScrollReveal from "./components/ScrollReveal";
import Chart from "react-apexcharts";
import styles from "./App.module.scss";

export const AppCtx = React.createContext({});

const IS_DEV = process.env.REACT_APP_IS_DEV === "true" ? true : false;
const TOKEN_ADDRESS = process.env.REACT_APP_TOKEN_ADDRESS;
const ETHERSCAN_API = process.env.REACT_APP_ETHERSCAN_API_KEY;
const ETHERSCAN_NETWORK = IS_DEV
  ? process.env.REACT_APP_ETHERSCAN_TEST_NET
  : process.env.REACT_APP_ETHERSCAN_MAIN_NET;

const CNCA = new Token(
  ChainId.RINKEBY,
  "0x5b7436a078ea1e7cd0d2abc22a178f7865841787",
  18
);

console.log({ CNCA });

function App() {
  const [chainId, setChainId] = React.useState(null);
  const [wallet, setWallet] = React.useState(null);
  const [address, setAddress] = React.useState(null);
  const [balance, setBalance] = React.useState(null);
  const refScroll = useRef<HTMLDivElement>(null);

  // TOKEN DATA
  const [isInitializing, setInitializingTokenRate] = React.useState(true);
  const [totalSupply, setTotalSupply] = React.useState<any>(null);
  const [wethValue, setWethValue] = React.useState<any>(null);
  const [CNCA_to_WETH, setCNCA_to_WETH] = React.useState<any>(null); // 1 CNCA to WETH

  const circulatingSupply = !isInitializing ? "300" : "0";
  const totalDistributed = !isInitializing
    ? (+circulatingSupply / +totalSupply) * 100
    : 0;
  const remainingSupply = !isInitializing
    ? (+totalSupply - +circulatingSupply).toFixed(2)
    : "0";

  const fetchUniswapExchangeRate = async () => {
    try {
      /**
       * ******************
       *     UNISWAP-V2   *
       * ******************
       */
      const pair = await Fetcher.fetchPairData(CNCA, WETH[CNCA.chainId]);
      const route = new Route([pair], WETH[CNCA.chainId]);
      const cnca_to_weth_rate = route.midPrice.invert().toSignificant(6);
      setCNCA_to_WETH(cnca_to_weth_rate);
      console.log({ fetchUniswapExchangeRate: cnca_to_weth_rate });
    } catch (e) {
      console.log({ ERROR_FETCHING_CNCA_RATE: e });
    }
  };

  const fetchEthValue = async () => {
    const response = await fetch(
      "https://api.coinbase.com/v2/prices/ETH-USD/spot"
    );
    const { data } = await response.json();
    if (data?.amount && data?.base === "ETH" && data?.currency === "USD") {
      setWethValue(data?.amount);
      console.log(data);
    }
  };

  const fetchTotalSupply = async () => {
    const response = await fetch(
      `https://api${
        IS_DEV ? `-${ETHERSCAN_NETWORK}` : ""
      }.etherscan.io/api?module=stats&action=tokenSupply&contractaddress=${TOKEN_ADDRESS}&apikey=${ETHERSCAN_API}`
    );
    const { message, result, status } = await response.json();
    if (message === "OK" && status === "1" && result !== "0") {
      const totalToken = (result + "").slice(0, -18);
      setTotalSupply(totalToken);
      console.log({ totalToken });
    }
  };

  const getTokenValue = () => {
    if (!isInitializing) {
      if (CNCA_to_WETH !== null && wethValue !== null) {
        return `$${+(CNCA_to_WETH * wethValue).toFixed(3)}`;
      }
      if (CNCA_to_WETH !== null && wethValue === null) {
        return `${(+CNCA_to_WETH).toFixed(6)} WETH`;
      }
    }
  };

  const initializeTokenRate = async () => {
    setInitializingTokenRate(true);
    try {
      console.log("FETCHING UNISWAP EXCHANGE RATE");
      await fetchUniswapExchangeRate();
      console.log("FETCHING ETH VALUE");
      await fetchEthValue();
      console.log("FETCHING TOTAL SUPPLY");
      await fetchTotalSupply();
      setInitializingTokenRate(false);
    } catch (e) {
      setInitializingTokenRate(false);
    }
  };

  React.useEffect(() => {
    initializeTokenRate();
  }, []);

  const getYear = () => {
    const currentYear = new Date().getFullYear();
    return `${currentYear - 1}-${currentYear}`;
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (refScroll && refScroll.current) {
      window.scrollTo({
        behavior: "smooth",
        top: refScroll.current.offsetTop - 50,
      });
    }
  };

  const options = {
    chart: {
      height: 300,
      type: "radialBar",
    },
    series: [totalDistributed],
    colors: ["#1752EB"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "60%",
          background: "transparent",
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
            // fontSize: width === "xs" ? "8px" : "14px",
            fontSize: "14px",
          },
          value: {
            offsetY: 5,
            color: "#79B9F4",
            // fontSize: width === "xs" ? "14px" : "22px",
            fontSize: "22px",
            fontWeight: 700,
            show: true,
            formatter: () => {
              return `${(+totalDistributed).toFixed(2)}%`;
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#1785EB"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Total Distributed"],
  };

  return (
    <AppCtx.Provider
      value={{
        chainId,
        setChainId,
        wallet,
        setWallet,
        address,
        setAddress,
        balance,
        setBalance,
      }}
    >
      <div className={styles.container}>
        <FBMessengerChat pageId="101226919086882" />
        <Header scrollTo={scrollTo} />
        <section className={styles.intro}>
          <ScrollReveal resetAnimation>
            <div className={[styles.maxWidth, styles.intro__content].join(" ")}>
              <img
                src={bgGirl}
                className={styles.intro__bgGirl}
                alt="background girl"
              />
              <img
                src={coinica}
                className={styles.intro__coinicaText}
                alt="coinica"
              />
            </div>
          </ScrollReveal>
        </section>
        <section className={styles.about}>
          <ScrollReveal resetAnimation>
            <div className={styles.about__content}>
              <h4>About</h4>
              <p>
                Coinica is a decentralized autonomous organization (DAO) for
                investing in blockchain-based games. We aim to create a
                blockchain game platform economy, optimizing its community-owned
                assets for maximum utility and sharing its profits with its
                token holders.
              </p>
              <button>White Paper</button>
            </div>
          </ScrollReveal>
        </section>
        <section ref={refScroll} className={styles.presale}>
          <ScrollReveal resetAnimation>
            <div
              className={[styles.maxWidth, styles.presale__content].join(" ")}
            >
              <div>
                <h4 className={styles.pulsate}>Presale is now live</h4>
                <ul>
                  <li>
                    <p>Token total supply</p>
                    <div className={styles.tokenRates}>
                      {isInitializing ? (
                        <div className={styles.loader}></div>
                      ) : (
                        <strong>{thousandSeparator(totalSupply)}</strong>
                      )}
                    </div>
                  </li>
                  <li>
                    <p>Token remaining supply</p>
                    <div className={styles.tokenRates}>
                      {isInitializing ? (
                        <div className={styles.loader}></div>
                      ) : (
                        <strong>{thousandSeparator(remainingSupply)}</strong>
                      )}
                    </div>
                  </li>
                </ul>

                <div className={styles.presale__totalDistributed}>
                  <Chart
                    className={styles.chart}
                    //@ts-ignore
                    options={options}
                    series={options.series}
                    height={options.chart.height}
                    type="radialBar"
                  />
                </div>
                <ul>
                  <li>
                    <p>Current exchange rate (Uniswap)</p>
                    <div className={styles.tokenRates}>
                      <strong>1 CNCA =</strong>
                      {isInitializing ? (
                        <div className={styles.loader}></div>
                      ) : (
                        <strong style={{ marginLeft: "5px" }}>
                          {getTokenValue()}
                        </strong>
                      )}
                    </div>
                  </li>
                  <li>
                    <p>Exchange volume</p>
                    <div className={styles.tokenRates}>
                      {isInitializing ? (
                        <div className={styles.loader}></div>
                      ) : (
                        <strong style={{ marginLeft: "5px" }}>No data</strong>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles.presale__contractAddress}>
                <p>Contract Address</p>
                <a
                  href={`https://${ETHERSCAN_NETWORK}.etherscan.io/address/0x5b7436a078ea1e7cd0d2abc22a178f7865841787`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  0x5b7436a078ea1e7cd0d2abc22a178f7865841787
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>
        <section className={styles.games}>
          <ScrollReveal resetAnimation>
            <div className={[styles.maxWidth, styles.games__content].join(" ")}>
              <h4>Games</h4>
              <div className={styles.games__list}>
                <a href="https://app.coinica.net/game/mahjong" target="_blank">
                  <img src={logoMJ} alt="mahjong" loading="lazy" />
                </a>
                <a href="https://app.coinica.net/game/ghostquest" target="_blank">
                  <img src={logoGQ} alt="ghost quest" loading="lazy" />
                </a>
                <a href="https://app.coinica.net/game/treasurehunt" target="_blank">
                  <img src={logoTH} alt="treasure hunt" loading="lazy" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>
        <footer className={styles.footerMeta}>
          <div>
            <a href="#/">Terms of Use</a> | <a href="#/">Privacy Policy</a>
          </div>
          <div>
            <i> {getYear()} Coinica, All rights reserved</i>
          </div>
        </footer>
      </div>
    </AppCtx.Provider>
  );
}

export default App;
