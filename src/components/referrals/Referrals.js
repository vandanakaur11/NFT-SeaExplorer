import React from "react";
import classes from "./Referrals.module.css";
import contactImg from "../../images/contactImg.png";
import invitationImg from "../../images/invitationImg.png";
import bonusImg from "../../images/bounsImg.png";
import curveLine from "../../images/curveLine.png";
import curveLine2 from "../../images/curveLine2.png";
import crossImg from "../../images/crossImg.png";
import discordColor from "../../images/discordColor.png";
import twitterColor from "../../images/twitterColor.png";
import faColor from "../../images/faColor.png";

function Referrals() {
    return (
        <div>
            <div className={classes.heading}>Referrals</div>
            <div className={classes.headingText}>
                Invite you friends to sea explorer.If they sign up, you and your friend will get bonus for free
            </div>
            <div className={classes.cardWrap}>
                <div className={classes.cardWrapInner}>
                    <img alt="" src={invitationImg} />
                    <div>
                        <h4>Send Invitation</h4>
                        <h5>Send your refferrals link to friends and tell them how cool sea explorer is!</h5>
                    </div>
                </div>
                <div>
                    <img alt="" src={curveLine2} className={classes.line} />
                </div>
                <div className={classes.cardWrapInner}>
                    <img alt="" src={contactImg} />
                    <div>
                        <h4>Registration</h4>
                        <h5>Let them register to our services using referrals link.</h5>
                    </div>
                </div>
                <div>
                    <img alt="" src={curveLine} className={classes.line} />
                </div>
                <div className={classes.cardWrapInner}>
                    <img alt="" src={bonusImg} />
                    <div>
                        <h4>Get Bonus</h4>
                        <h5>You and your friends get bonus</h5>
                    </div>
                </div>
            </div>
            <div className={classes.bottomheading}>
                <h2>Invite your friends</h2>
                <h4>Inserts your friends addresses and send them invitation to join sea explorer.</h4>
            </div>
            <div className={classes.inviteWrap}>
                <div className={classes.inviteWrapInner}>
                    <div className={classes.emailWrap}>
                        <div>johnxyz.com</div>
                        <img alt="" src={crossImg} />
                    </div>
                    <div className={classes.inpWrap}>
                        <input placeholder="Enter Email address" />
                    </div>
                </div>
                <div className={classes.sendBtn}>Send</div>
            </div>
            <div className={classes.bottomheading}>
                <h2>Share the referral link</h2>
                <h4>You can also share your refrral link by coping and sending it or sharing it on your social media</h4>
            </div>
            <div className={classes.shareReferralWrap}>
                <div className={classes.shareReferralLeft}>
                    <input alt="" placeholder="Seaexplorer.com/123456789" />
                    <h4>Copy Link</h4>
                </div>
                <div className={classes.shareReferralRight}>
                    <img alt="" src={faColor} className={classes.fbIcon} />
                    <img alt="" src={twitterColor} />
                    <img alt="" src={discordColor} />
                </div>
            </div>
        </div>
    );
}

export default Referrals;
