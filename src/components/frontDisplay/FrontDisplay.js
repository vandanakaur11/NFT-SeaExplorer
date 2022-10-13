import React from "react";
import classes from "./FrontDisplay.module.css";
import macbook1 from "../../images/macbook1.png";

function FrontDisplay() {
    return (
        <div>
            <div className={classes.mainWrap}>
                <div className={classes.leftWrap}>
                    <h1>
                        No Code
                        <br /> NFT Collection Generator
                    </h1>
                    <h4>
                        Generate your NFT Collection and deploy it to a blockchain. We support images, gifs and videos and deploy to
                        Ethereum, Polygon and more.
                    </h4>
                    <div className={classes.btn}>GET STARTED</div>
                </div>
                <div className={classes.rightWrap}>
                    <img src={macbook1} alt="" />
                </div>
            </div>
        </div>
    );
}

export default FrontDisplay;
