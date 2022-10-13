import React from "react";
import classes from "./Footer.module.css";
import discordImg from "../../images/discordImg.png";
import youtubeImg from "../../images/youtubeImg.png";
import TwitterLogo from "../../images/TwitterLogo.png";

function Footer() {
    return (
        <div className={classes.main}>
            <div className={classes.wrap}>
                <h1>NFT GENERATOR</h1>
                <div className={classes.wrapInner}>
                    <div className={classes.wrapOption}>
                        <div>Home</div>
                        <div>App</div>
                        <div>Metadata Viewer</div>
                        <div>Help Center</div>
                        <div>Doodle Fruits collection</div>
                    </div>
                    <div className={classes.wrapOption}>
                        <div>Terms of Service</div>
                        <div>Privacy Policy</div>
                        <div>Contact Us</div>
                        <div>Affiliate Program</div>
                    </div>
                    <div className={classes.wrapOption}>
                        <div className={classes.heading}>Social Media</div>
                        <div className={classes.wrapImg}>
                            <img src={TwitterLogo} alt="" />
                            <img src={discordImg} alt="" />
                            <img src={youtubeImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <h4>Copyright © 2021 NFT Art Generator. All rights reserved.</h4>
        </div>
    );
}

export default Footer;
