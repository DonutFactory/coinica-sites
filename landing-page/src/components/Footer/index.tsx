import styles from "./Footer.module.scss";
import coinica from "../../assets/image/coinica.png";
import { FaFacebook } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";


const Footer = () => {
    const getYear = () => {
        const currentYear = new Date().getFullYear();
        return `${currentYear - 1}-${currentYear}`;
      };

    return (
      <footer className={styles.footerMeta}>
        <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
                <a href="/">
                    <img src={coinica} width="auto" height="50" alt="logo" />
                </a>
            </div>
            <div className={styles.footerLeft}>
                <div><a href="https://gov.coinica.net/" target="_blank" rel="noreferrer">Governance</a></div>
                <div><a href="http://forum.coinica.net/" target="_blank" rel="noreferrer">FAQ</a></div>
                <div><a href="#">Whitepaper</a></div>
            </div>
            <div className={styles.footerRight}>
            <div className={styles.footerRight__icons}>
                <a href="https://facebook.com/Coinica-101226919086882" target="_blank" rel="noreferrer"><FaFacebook className={styles.facebook}/></a>
                <a href="https://discord.gg/uYFtanzn" target="_blank" rel="noreferrer"><SiDiscord className={styles.discord}/></a>
            </div>
            <div></div>
            <div><i> {getYear()} Coinica, All rights reserved</i></div>    
            </div>
        </div>
      </footer>
    );
};

export default Footer;