import styles from "../Whitepaper.module.scss";

const DAO = () => {
    return (
      <div className={styles.container}>
        <h1>DAO</h1>
        <div className={styles.content}>
          <h3>What is DAO?</h3>
          <p>
            DAO stands for "Decentralized Autonomous Organization," and Bitcoin
            and Ethereum are models for this. Bitcoin does not have a central
            authority, but issues and manages tokens based on predetermined
            rules.
          </p>
          <p>
            DAO is characterized by its transparency and fairness. A series of
            contracts, called smart contracts, are executed autonomously.
            Therefore, if there are no flaws in the smart contracts, no central
            authority can intervene and change the rules. In addition, smart
            contracts can be verified by anyone.
          </p>
          <p>
            With this transparency and impartiality, the future of a DAO
            project, including its operational policies, is determined by
            decisions voted on by DAO participants, rather than by a centralized
            body.
          </p>
          <h3>
            <b>Coinica</b> DAO
          </h3>
          <p>
            All participants in the <b>Coinica</b> DAO will be the owners and
            managers of the entire ecosystem of the <b>Coinica</b> network.
            Decisions on the
            <b>Coinica</b> project will be made by a vote of the participants.
            The voting rights of the <b>Coinica</b> DAO will be distributed
            based on the percentage of the total number of governance tokens
            owned by the DAO participants.
          </p>
          <p>
            <b>Coinica</b> anticipates that the DAO will include resolutions for
            each of the following: proposals for expansion of platform
            functions, proposals for participation in game titles on the
            platform, proposals for planning new game titles, proposals for
            supported languages, and proposals for supported networks.
          </p>
          <p>
            Coinica is currently preparing to build a DAO using Gnosis Safe and
            Snap shot, and plans to determine the distribution of voting rights
            from the start of the DAO to the early stages of the DAO, based on a
            predetermined date to confirm the dispersion of the governance
            tokens.
          </p>
          <h3>Governor Token</h3>
          <p>
            Coinica is planning to issue Coinica (CNCA) Token as a governance
            token for DAO and projects.
          </p>
          <p>
            We have allocated 60% to Community, the core of the DAO, and plan to
            make it available to users through token sales, staking, and DAO
            voting rewards. We also plan to send the portion allocated to
            marketing and operations to users through airdrops, VIP user
            rewards, and game test participation rewards, so we are aiming to
            create a more decentralized DAO community by distributing more than
            70%. We aim to create a more decentralized DAO community by
            distributing more than 70% of the DAO.
          </p>
          <h3>CNCA Token Allocation</h3>
          <table>
              <tr>
                <th className={styles.text_left}>Total Supply</th>
                <th colSpan={2}>1,000,000,000</th>
              </tr>
              <tr>
                <td className={styles.text_left}>Founder</td>
                <td>5.00%</td>
                <td>50,000,000</td>
              </tr>
              <tr>
                <td className={styles.text_left}>Team</td>
                <td>1.00%</td>
                <td>10,000,000</td>
              </tr>
              <tr>
                <td className={styles.text_left}>Seed Investor</td>
                <td>11.00%</td>
                <td>110,000,000</td>
              </tr>
              <tr>
                <td className={styles.text_left}>Advisor</td>
                <td>.50%</td>
                <td>5,000,000</td>
              </tr>
              <tr>
                <td className={styles.text_left}>Marketing</td>
                <td>9.50%</td>
                <td>95,000,000</td>
              </tr>
              <tr>
                <td className={styles.text_left}>Operating</td>
                <td>3.00%</td>
                <td>30,000,000</td>
              </tr>
              <tr>
                <td className={styles.text_left}>Community</td>
                <td>60.00%</td>
                <td>600,000,000</td>
              </tr>
              <tr>
                <td className={styles.text_left}>Reserve</td>
                <td>10.00%</td>
                <td>100,000,000</td>
              </tr>
              <tr>
                <td className={styles.text_left}>Total</td>
                <td>100.00%</td>
                <td>1,000,000,000</td>
              </tr>
          </table>
        </div>
      </div>
    );
};

export default DAO;