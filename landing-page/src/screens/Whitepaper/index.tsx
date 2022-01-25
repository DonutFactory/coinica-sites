import React, { useRef } from "react";
import { Switch, Route, Link, useRouteMatch, BrowserRouter as Router } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Game from "components/Whitepaper/Game";
import Introduction from "components/Whitepaper/Introduction";
import DAO from "components/Whitepaper/DAO";
import styles from "./Whitepaper.module.scss";


const Whitepaper = () => {

    let { url , path } = useRouteMatch();   

    const refScroll = useRef<HTMLDivElement>(null);

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if (refScroll && refScroll.current) {
          window.scrollTo({
            behavior: "smooth",
            top: refScroll.current.offsetTop - 50,
          });
        }
      };

    return (
        <Router>
            <Header scrollTo={scrollTo}/>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <ul>
                        <li><Link to={`${url}`}>Introduction</Link></li>
                        <li><Link to={`${url}/game`}>Game</Link></li>
                        <li><Link to={`${url}/dao`}>DAO</Link></li>
                        {/* <li><Link to={`${url}`}>Token Economy</Link></li>
                        <li><Link to={`${url}`}>Treasury</Link></li>
                        <li><Link to={`${url}`}>Roadmap</Link></li>
                        <li><Link to={`${url}`}>Roadmap addendum</Link></li>
                        <li><Link to={`${url}`}>Risk Disclaimer</Link></li> */}
                    </ul>
                </div>
                <div className={styles.content}>
                    <Switch>
                        <Route exact path={path} component={Introduction} />
                        <Route path={`${path}/game`} component={Game} />
                        <Route path={`${path}/dao`} component={DAO} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </Router>
    );
};

export default Whitepaper;