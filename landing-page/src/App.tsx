import bgGirl from "./assets/image/bg-girl.png";
import coinica from "./assets/image/coinica.png";
import logoMJ from "./assets/image/logo-mj.png";
import logoGQ from "./assets/image/logo-gq.png";
import logoTH from "./assets/image/logo-th.png";
import Header from "./components/Header";
import ScrollReveal from "./components/ScrollReveal";
import styles from "./App.module.scss";

function App() {
  const getYear = () => {
    const currentYear = new Date().getFullYear();
    return `${currentYear - 1}-${currentYear}`;
  };

  return (
    <div className={styles.container}>
      <Header />
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
  );
}

export default App;
