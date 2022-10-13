import React from "react";
import classes from "./Features.module.css";
import green from "../../images/green.svg";
import blue from "../../images/blue.svg";
import purple from "../../images/purple.svg";
import red from "../../images/red.svg";
import downtriangle from "../../images/downtriangle.png";
import uptriangle from "../../images/uptriangle.png";

function Features() {
    return (
        <div>
            {/* <img alt="" src={uptriangle} style={{ width: "100%" }} className={classes.cutImg} /> */}
            <div className={classes.mainWrap}>
                <div className={classes.innerWrap}>
                    <div className={classes.innerWrapInn}>
                        <div className={classes.head}>OUR FEATURES</div>
                        <div className={classes.head2}>
                            Built for <span>artists</span> and <span>NFT creators</span>
                        </div>
                        <div className={classes.para}>
                            NFT Art Generator was made so artists and NFT creators can focus on creating, not finding a coder or learning
                            how to code.
                        </div>
                    </div>
                    <div className={classes.innerWrapInnTwo}>
                        <div className={classes.cardCont}>
                            <div className={classes.cardWrap}>
                                <div className={classes.card}>
                                    <div>
                                        <img src={green} alt="" />
                                    </div>
                                    <div className={classes.cardInner}>
                                        <h3>Easy To Use</h3>
                                        <h4>
                                            No coding required, at all. Create your layers, import your assets, click Generate and you are
                                            done!
                                        </h4>
                                    </div>
                                </div>
                                <div className={classes.card}>
                                    <div>
                                        <img src={blue} alt="" />
                                    </div>
                                    <div className={classes.cardInner}>
                                        <h3>Export to images, gifs or videos</h3>
                                        <h4>
                                            You can import images, gifs and videos and we will generate your collection in the format your
                                            decide.
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.cardWrap}>
                                <div className={classes.card}>
                                    <div>
                                        <img src={purple} alt="" />
                                    </div>
                                    <div className={classes.cardInner}>
                                        <h3>Layer Rarity</h3>
                                        <h4>
                                            In a large collection, you may not want to apply a layer on every NFT. You can configure a layer
                                            rarity so it is applied only a certain percent of times.
                                        </h4>
                                    </div>
                                </div>
                                <div className={classes.card}>
                                    <div>
                                        <img src={red} alt="" />
                                    </div>
                                    <div className={classes.cardInner}>
                                        <h3>Attribute Rarity</h3>
                                        <h4>
                                            Similarly to layer rarity, you can configure certain attributes to be more rare than others. You
                                            will be able to easily tell what are the change for an attribute to be applied.
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img alt="" src={downtriangle} style={{ width: "100%" }} className={classes.cutImg} /> */}
        </div>
    );
}

export default Features;
