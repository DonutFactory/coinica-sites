import React, { useRef } from "react";
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

function App() {
  const [chainId, setChainId] = React.useState(null);
  const [wallet, setWallet] = React.useState(null);
  const [address, setAddress] = React.useState(null);
  const [balance, setBalance] = React.useState(null);
  const refScroll = useRef<HTMLDivElement>(null);

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
    series: [27],
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
              return "0";
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
                    <strong>0</strong>
                  </li>
                  <li>
                    <p>Token remaining supply</p>
                    <strong>0</strong>
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
                    <p>Current exchange rate</p>
                    <strong>1 CNCA = 0.006</strong>
                  </li>
                  <li>
                    <p>Exchange volume</p>
                    <strong>0</strong>
                  </li>
                </ul>
              </div>
              <div className={styles.presale__contractAddress}>
                <p>Contract Address</p>
                <a
                  href="https://rinkeby.etherscan.io/address/0x5b7436a078ea1e7cd0d2abc22a178f7865841787"
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
                <div>
                  <img src={logoMJ} alt="mahjong" loading="lazy" />
                </div>
                <div>
                  <img src={logoGQ} alt="ghost quest" loading="lazy" />
                </div>
                <div>
                  <img src={logoTH} alt="treasure hunt" loading="lazy" />
                </div>
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
