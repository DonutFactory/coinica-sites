import styles from "../Whitepaper.module.scss";
import th from "assets/image/treasurehunt.png";
import gq from "assets/image/ghostquest.png";
import mj from "assets/image/mahjong.png";
import zr from "assets/image/zodiacracing.png";
import md from "assets/image/quiz.jpg";
import fh from "assets/image/fishhunt.jpg";

const Game = () => {
    return (
      <div className={styles.container}>
        <h1>Coinica Games</h1>
        <div className={styles.content}>
          <p>
            The <b>Coinica</b> team aims to develop a gaming platform that is
            free from tampering, cheating and fraud. The game is run without any
            administrators.
          </p>
          <h3>Blockchain-based transparent operations, DAO, and RNG</h3>
          <p>
            The Coinica project uses blockchain technology and a decentralized
            autonomous organization called "DAO," which is often used as a
            concept these days, to operate a game platform that maintains
            transparency. By introducing "random numbers" generated by
            blockchain technology, Coinica games will provide games with
            fairness in terms of probability elements such as root box, which
            are not arbitrarily set by the management.
          </p>
          <h3>Game titles at launch</h3>
          <p>
            The following three titles will be available at the time of Coinica
            platform launch.
          </p>
          <h2>Treasure Hunt</h2>
          <div className={styles.image}>
            <img className={styles.treasurehunt} src={th} alt="Tresure Hunt" />
          </div>
          <p>
            Search for treasure on three different ocean maps to avoid detection
            by rival pirates. The player sets the number of pirates and can open
            one panel from each of the 16 panels. Look at the map. The
            multiplier for finding treasure is calculated automatically. If you
            keep finding treasure chests without being spotted by pirates, your
            multiplier will increase, but so will the risk of being spotted by
            pirates. Find the treasure chest and withdraw your reward at the
            right time.
          </p>
          <h2>Ghost Quest</h2>
          <div className={styles.image}>
            <img className={styles.ghostquest} src={gq} alt="Ghost Quest" />
          </div>
          <p>
            An idol game of character battles. The player simply summons a
            ghost. The summoned ghost is sent to the battlefield. If a player's
            ghost wins on the battlefield, the ghost takes 1 life from the
            opponent, and if the player loses in battle, the ghost loses 1 life.
            If a ghost reaches 0 life, it is removed from the game and the
            battle ends. If the player's ghost is able to return alive, the
            player will be rewarded according to the lives earned.
          </p>
          <p>
            The game is decided by how many lives you take away from your enemy
            and how many lives you don't lose. Players can also retreat their
            ghosts mid-battle before the set number of battles from the battle
            by paying the required cost. If the ghost holds a certain number of
            lives, it can secure its reward that way.
          </p>
          <h2>Mahjong High-Low</h2>
          <div className={styles.image}>
            <img className={styles.mahjong} src={mj} alt="Mahjong High-Low" />
          </div>
          <p>
            A high-low game using mahjong tiles. The player continues to make
            high-low regardless of whether he wins or loses, and earns a bonus
            by completing a mahjong role with 14 tiles until the 33rd time.
          </p>
          <p>
            The mahjong yaku are based on the rules of riichi mahjong, but some
            yaku that appear only in competitive mahjong, such as yarikong, do
            not exist. If a player feels that his or her hand cannot be
            completed within 33 rounds, he or she can flush the field and start
            a new game.
          </p>
          <h3>Titles to be released after launch</h3>
          <p>
            After the launch, the team is planning to release two more titles
            and will focus on the following updates
          </p>
          <h2>Zodiac Racing</h2>
          <div className={styles.image}>
            <img className={styles.zodiacracing} src={zr} alt="Zodiac Racing" />
          </div>
          <p>
            This is a game where you have to guess the order of a race between
            the twelve animals of the Chinese zodiac.
          </p>
          <p>
            You can enjoy a variety of predictions by adding variations to the
            prediction method and odds, such as guessing the animal that will
            come in first place, the animal that will come in first and second
            place, and the animal that will come in first through third place.
          </p>
          <h2>Binary Option</h2>
          <p>
            This is a game where you bid on cryptocurrency and legal tender
            pairs, or cryptocurrency pairs, predicting whether the price will go
            up or down in 3 minutes, 5 minutes, 1 hour or 24 hours. The total
            amount of bids missed on the day will be distributed according to
            the number of bids won.
          </p>
          <p>
            Depending on the increase in DAU and total number of bids, the time
            to allocation will be adjusted from 1 day to 12 hours, or every 6
            hours.
          </p>
          <h3>Titles in planning</h3>
          <h2>Minority Decision</h2>
          <div className={styles.image}>
            <img
              className={styles.minoritydecision}
              src={md}
              alt="Minority Decision"
            />
          </div>
          <p>
            This is a game where you vote for the answer that will be in the
            minority from the questions that are asked once a day. The reward is
            divided among the players who can keep choosing the minority answer
            until the end.
          </p>
          <h2>Fish Hunt</h2>
          <div className={styles.image}>
            <img className={styles.fishhunt} src={fh} alt="Fish Hunt" />
          </div>
          <p>
            Choose an environment from rivers, lakes, near-shore waters, or the
            distant ocean, and guess which of the 24 fishing spots will hold the
            fish. The game is not just about catching fish, but also about
            competing with other users in a ranking based on the type and size
            of fish.
          </p>
          <h3>Coinica Games Platform</h3>
          <p>
            At the time of launch, Metamask is preparing to connect to the
            Ethereum network, but there are concerns that the rising cost of gas
            and other factors will reduce usability, so we will continue to
            develop the system so that it can be used on other networks
            available to Metamask, such as BSC and Polygon.
          </p>
          <p>
            The platform and each game title are based on English, but we are
            also working on supporting multiple languages such as Simplified
            Chinese, Japanese, Korean and Russian.
          </p>
          <p>
            We are also planning to add Referral, VIP, and other useful features
            to the platform for our users. The integration of these features
            will be changed according to the proposals in the DAO.
          </p>
        </div>
      </div>
    );
};

export default Game;