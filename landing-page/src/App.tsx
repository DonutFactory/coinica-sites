import bgGirl from "./assets/image/bg-girl.png";
import coinica from "./assets/image/coinica.png";
import logoMJ from "./assets/image/logo-mj.png";
import logoGQ from "./assets/image/logo-gq.png";
import logoTH from "./assets/image/logo-th.png";
import Header from "./components/Header";
import ScrollReveal from "./components/ScrollReveal";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.intro}>
        <ScrollReveal>
          <div className={[styles.maxWidth, styles.introContent].join(" ")}>
            <img src={bgGirl} className={styles.bgGirl} alt="background girl" />
            <img src={coinica} className={styles.coinicaText} alt="coinica" />
          </div>
        </ScrollReveal>
      </section>
      <section className={styles.about}>
        <ScrollReveal resetAnimation>
          <div className={styles.aboutContent}>
            <h4>About</h4>
            <p>
              Coinica is a decentralized autonomous organization (DAO) for
              investing in blockchain-based games. We aim to create a blockchain
              game platform economy, optimizing its community-owned assets for
              maximum utility and sharing its profits with its token holders.
            </p>
            <button>White Paper</button>
          </div>
        </ScrollReveal>
      </section>
      <section className={styles.games}>
        <ScrollReveal resetAnimation>
          <div className={[styles.maxWidth, styles.gamesContent].join(" ")}>
            <h4>Games</h4>
            <div className={styles.gamesList}>
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
        <div> 2020-2021 Coinica, All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;