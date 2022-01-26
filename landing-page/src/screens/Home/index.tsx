import React, { useRef } from "react";
import bgGirl from "assets/image/bg-girl.png";
import coinica from "assets/image/coinica.png";
import logoMJ from "assets/image/logo-mj.png";
import logoGQ from "assets/image/logo-gq.png";
import logoTH from "assets/image/logo-th.png";
import Header from "components/Header";
import ScrollReveal from "components/ScrollReveal";
import Footer from "components/Footer";
import RoadMap from "components/RoadMap/RoadMap";
import FBMessengerChat from "components/FBMessengerChat";
import styles from "App.module.scss";
import { Link } from "react-router-dom";

export const AppCtx = React.createContext({});


const Home = () => {
    const [chainId, setChainId] = React.useState(null);
    const [wallet, setWallet] = React.useState(null);
    const [balance, setBalance] = React.useState(null);
    const refScroll = useRef<HTMLDivElement>(null);
    const [address, setAddress] = React.useState(null);

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if (refScroll && refScroll.current) {
          window.scrollTo({
            behavior: "smooth",
            top: refScroll.current.offsetTop - 50,
          });
        }
      };

    return(
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
              <Link to='/whitepaper'><button>White Paper</button></Link>
            </div>
          </ScrollReveal>
        </section>
        <section className={styles.roadMap}>
          <h4>Road map</h4>
          <RoadMap />
        </section>
        <section className={styles.games}>
          <ScrollReveal resetAnimation>
            <div className={[styles.maxWidth, styles.games__content].join(" ")}>
              <h4>Games</h4>
              <div className={styles.games__list}>
                <a
                  href="https://app.coinica.net/game/mahjong"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={logoMJ} alt="mahjong" loading="lazy" />
                </a>
                <a
                  href="https://app.coinica.net/game/ghostquest"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={logoGQ} alt="ghost quest" loading="lazy" />
                </a>
                <a
                  href="https://app.coinica.net/game/treasurehunt"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={logoTH} alt="treasure hunt" loading="lazy" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>
        <Footer />
      </div>
    </AppCtx.Provider>
    );
};

export default Home;