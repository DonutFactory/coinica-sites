import React from "react";
import { Box } from "@material-ui/core";
import styles from "./Terms.module.scss";
import ButtonClose from "../../ButtonClose";


const TermsOfUse = ({ closeModal }) => {
    return (
      <div>
        <div style={{textAlign:'right'}}>
          <ButtonClose handleClick={() => closeModal()} />
        </div>
        <p className="center-content">
          <h1>Terms of Use</h1>
          <h4>Last Update: 17/08/2021</h4>
        </p>
        <p className={`${styles.terms_of_use}`}>
          <ol>
            <li>
              <strong>User's Acceptance</strong>
              <ol>
                <li>
                  These Terms of Use of Coinica's service constitute a legally
                  binding electronic end User license agreement between User and
                  Coinica ("Service")
                </li>
                <li>
                  By using or visiting coinica.net User agree to be bound by
                  these Term of Use. These Terms of Use affect User' legal
                  rights and obligations. If the user does not agree to be bound
                  by any provision of these Terms, please, do not use the
                  Service.
                </li>
                <li>
                  Coinica may attempt to notify USER when major changes to the
                  Terms of Use are made, however, USER should review up-to-date
                  versions by themselves. Coinica reserves the right, in its
                  sole discretion, to modify or revise Terms of Use and policies
                  at any time, and USER agree to be bound by any modifications/
                  revisions.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>General Terms and Conditions</strong>
              <ol>
                <li>
                  Coinica reserves the right to expose big winners for
                  advertising purposes.
                </li>
                <li>
                  Bonuses are available only for one account per individual,
                  family, household, computer, or IP address. If duplicated
                  accounts will be detected Bonuses will be revoked or canceled.
                </li>
                <li>
                  Coinica reserves the right to check User's transactions at any
                  time for any reason.
                </li>
                <li>
                  It is the User's responsibility to check if each application
                  on Coinica is legal in their country of use, and to use it
                  accordingly.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>No Warranties</strong>
              <ol>
                <li>
                  Regardless of our efforts, Coinica does not offer warranty
                  that the Service will be uninterrupted, timely or error-free,
                  or that defects will be corrected.
                </li>
                <li>
                  Some jurisdiction may prohibit a disclaimer of warranties and
                  User may have other rights that vary from jurisdiction to
                  jurisdiction.
                </li>
                <li>
                  From time-to-time Coinica may need to update, reset,
                  temporarily interrupt the Service. Any of these actions may
                  cause User to lose access to the Service. Coinica shall have
                  no liability to User if the Service or any aspect of it are
                  interrupted or unavailable for any reason, such as ddos attack
                  or network problem.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Basic Terms</strong>
              <ol>
                <li>
                  Content- includes text, software, scripts, graphics, photos,
                  sounds, music, videos, works of authorship, applications,
                  interactive features links and other materials User may view
                  or access through Service;
                </li>
                <li>
                  Rules- rules for use of the Service that can be found on the
                  Coinica website;
                </li>
                <li>Bet - an act of betting sum of Cryptocurrency;</li>
                <li>
                  Prohibited Jurisdictions - states where applications on
                  Coinica are prohibited or restricted;
                </li>
                <li>
                  Unauthorized Use - use prohibited by this Terms of Use and
                  applicable legislation use of the Service;
                </li>
                <li>
                  Coinica website Content-name, graphics, sounds and software
                  elements of the Coinica website and the Service;
                </li>
                <li>Cryptocurrency - type of a digital currency;</li>
                <li>
                  Bonus - Cryptocurrency that has been granted to users by the
                  Service;
                </li>
                <li>
                  Deposit - act of refilling User's balance with Cryptocurrency;
                </li>
                <li>
                  Withdraw - act of withdrawing Cryptocurrency form the balance;
                </li>
                <li>
                  Minimum Withdrawal Amount - the minimum amount of
                  Cryptocurrency that User can withdraw from User's balance.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Grant of License</strong>
              <ol>
                <li>
                  Subject to User's compliance with the Terms of Use herein,
                  Coinica grants User a personal, non-exclusive, revocable,
                  non-transferable, limited right to use the Service. Unless and
                  to the extent that Coinica have expressly authorized User in
                  writing, User must not;
                  <ul>
                    <li>Copy or download any Content from the Service;</li>
                    <li>
                      Distribute, publicly perform or display, lease, sell,
                      transmit, transfer, publish, edit, copy, create derivative
                      works from, rent, sub-license, distribute, decompile,
                      disassemble, reverse, engineer or otherwise make
                      Unauthorized Use of Content;
                    </li>
                    <li>Make any commercial use of Content;</li>
                    <li>
                      Remove, obscure, or alter copyright, patent trademark, or
                      other proprietary rights notices affixed to Content.
                    </li>
                  </ul>
                </li>
                <li>
                  The Coinica's name and logo are trademarks of Coinica, and may
                  not be copied, imitated, or used, in whole or in part, without
                  the prior written permission of Coinica. Coinica and its
                  licensors are the sole holders of all rights in and to the
                  Service and code, structure, and organization, including
                  copyright, trade secrets, intellectual property and other
                  rights.
                </li>
                <li>
                  Coinica reseves any rights implied or otherwise, which are not
                  expressly granted to the User hereunder and retain all rights
                  to the Service.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Eligibility</strong>
              <ol>
                <li>
                  By agreeing to these Terms of Use, User represent and warrant
                  to us:
                  <ul>
                    <li>that User are at least eighteen years of age;</li>
                    <li>
                      that User an individual above the legal age of majority in
                      User's jurisdiction;
                    </li>
                    <li>that User are legally capable individual;</li>
                    <li>
                      that User are NOT accessing the Service from Prohibited
                      Jurisdictions. Coinica doing its best to verify the
                      legality of the Service in each jurisdiction however, it
                      is User's responsibility to ensure that their use of the
                      Service is lawful.
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Unauthorized Use</strong>
              <ol>
                <li>
                  User must keep all information relating to User's Account
                  confidential. The Service is intended solely for User's
                  personal use. User is only allowed to bet for personal
                  entertainment.
                </li>
                <li>
                  User must not transfer Cryptocurrency to the address provided
                  by Coinica for the deposit purposes from a shared wallet or
                  any other address not solely controlled by the User.
                </li>
                <li>
                  Individuals located in or residents of the Prohibited
                  Jurisdictions where any application on Coinica is prohibited
                  are not permitted to make use of the Service. For the
                  avoidance of doubt, the foregoing restrictions on engaging in
                  a Cryptocurrency play from Prohibited Jurisdictions applies
                  equally to residents and citizens of other nations wile
                  located in a Prohibited Jurisdiction. Any attempt to
                  circumvent the restrictions on play by any individual is
                  located in a Prohibited Jurisdictions, is a breach of this
                  Term of Use. An attempt at circumvention includes, but not
                  limited to, manipulating the information used by Coinica to
                  identify User's location and providing Coinica with false or
                  misleading information regarding User's location or place of
                  residence. User should ensure that User will be acting legally
                  in User's jurisdiction in using the Service and User
                  represent, warrant, and agree that User wil do so.
                </li>
                <li>
                  Coinica will not run any operations or get involved in any way
                  with any of OFAC(US Office of Foreign Asset Control)
                  sanctioned countries.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Deposit</strong>
              <ol>
                <li>
                  Coinica does not accept third party Deposits (e.g. friends,
                  family). User mus deposit Cryptocurrency from an
                  account/system that is registered to User.
                </li>
                <li>
                  Any crosschain Deposits (sending, for example, Bitcoin Cash to
                  a Bitcoin address) will not be processed and coins will be
                  permanently lost.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Withdrawal</strong>
              <ol>
                <li>
                  Coinica is not responsible for the amount of time a
                  transaction takes to confirm due to blockchain congestion,
                  blockchain queue back-up, receiving address confirmation time,
                  and for incorrectly entering the wrong receiving address. The
                  same applied to fast fee transactions where the user pays for
                  the transaction fees even though the expected transaction
                  confirmation time is lower.
                </li>
                <li>
                  Coinica is not responsible for frozen or confiscated
                  Cryptocurrency after Cryptocurrency have been withdrawn from
                  the Service.
                </li>
                <li>
                  In some cases, Withdrawal on a User's account has to be
                  manually confirmed by Coinica staff. The Coinica website
                  reserves the right to do this and as a result, those
                  Withdrawals can take up to a few days.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Disputes</strong>
              <ol>
                <li>
                  If User wish to make a complaint, please contact our support
                  team via support@coinica.net
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>SEVERABILITY</strong>
              <ol>
                <li>
                  If any provision hereof is determined by any competent
                  authority to be invalid, unlawful, or unenforceable to any
                  extent, such term, condition or provision will to that extent
                  be severed from the remaining terms, conditions and provisions
                  which will continue to be valid to the fullest extent
                  permitted by law.
                </li>
                <li>
                  In such cases, the part deemed invalid, unlawful or
                  unenforceable shall be amended in a manner consistent with the
                  applicable law to reflect, as closely as possible, Coinica's
                  original intent.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Assignment</strong>
              <ol>
                <li>
                  Coinica reserves the right to assign any of its rights under
                  this Term of Use, in whole or in part, at any time without
                  notice. The User may not assign any of his/her rights or
                  obligations under this Term of Use.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Cookies</strong>
              <ol>
                <li>
                  Coinica employ the use of cookies. By using the Service User
                  consent to the use of cookies in accordance with Service
                  policy. Some of our affiliate/advertising partners may also
                  use cookies.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Underage Members</strong>
              <ol>
                <li>
                  Underaged are not allowed to play on Coinica all accounts
                  created by an underage person will be permanently blocked and
                  winnings forfeited.
                  <br />
                  <br />
                  In case User are an adult member of Coinica and have underage
                  in User's household, User are responsible for protecting
                  User's computer and storing User's login details in a safe
                  place.
                </li>
              </ol>
            </li>
          </ol>
        </p>
        <Box m={3} style={{ fontWeight: "lighter" }} padding={3}></Box>
      </div>
    );
};

export default TermsOfUse;