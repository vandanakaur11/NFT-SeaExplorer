import React, { useState, useEffect } from "react";
import classes from "./PaymentComp.module.css";
import paypalImg from "../../images/paypalImg.png";
import mastercardImg from "../../images/mastercardImg.png";
import deleteImg from "../../images/deleteImg.png";
import editImg from "../../images/editImg.png";
import addPlusImg from "../../images/addPlusImg.png";
import stripeImg from "../../images/stripeImg.png";
import pngwingImg from "../../images/pngwingImg.png";
import cardImg from "../../images/cardImg.png";

function PaymentComp({ paypalOpt, setPaypalOpt, stripeOpt, setStripeOpt, cardOpt, setCardOpt }) {
    const [showOpt, setShowOpt] = useState(false);
    console.log(cardOpt);
    useEffect(() => {
        setPaypalOpt("");
        setCardOpt("");
        setStripeOpt("");
    }, []);
    return (
        <div>
            {cardOpt === "" && stripeOpt === "" && paypalOpt === "" && (
                <div className={classes.main}>
                    <div>
                        <div className={classes.Cont}>
                            <div className={classes.leftWrap}>
                                <img alt="" src={paypalImg} />
                                <div>
                                    <h3>Paypal</h3>
                                    <h5>xyz@gmail.com</h5>
                                </div>
                            </div>
                            <div className={classes.rightWrap}>
                                <img alt="" src={deleteImg} />
                                <img alt="" src={editImg} />
                            </div>
                        </div>
                        <div className={classes.Cont}>
                            <div className={classes.leftWrap}>
                                <img alt="" src={mastercardImg} />
                                <div>
                                    <h3>Mastercard</h3>
                                    <h5>*******945</h5>
                                </div>
                            </div>
                            <div className={classes.rightWrap}>
                                <img alt="" src={deleteImg} />
                                <img alt="" src={editImg} />
                            </div>
                        </div>
                    </div>
                    <div className={classes.addImgWrap}>
                        <div className={!showOpt ? classes.showingOpt : ""}>
                            <div className={classes.optWrap}>
                                <div className={classes.stripeStyleWrap}>
                                    <img alt="" src={stripeImg} className={classes.stripeStyle} onClick={() => setStripeOpt("stripe")} />
                                    <h5>Stripe</h5>
                                </div>
                                <div className={classes.payStyleWrap}>
                                    <img alt="" src={pngwingImg} className={classes.payStyle} onClick={() => setPaypalOpt("paypal")} />
                                    <h5>Paypal</h5>
                                </div>
                                <div className={classes.cardStyleWrap} onClick={() => setCardOpt("card")}>
                                    <img alt="" src={cardImg} className={classes.cardStyle} />
                                    <h5>Card</h5>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => setShowOpt(!showOpt)}>
                            <img alt="" src={addPlusImg} className={classes.addImg} />
                        </div>
                    </div>
                </div>
            )}
            {paypalOpt === "paypal" && (
                <div>
                    <div className={classes.cardHeading}>Add Paypal Account Details</div>
                    <div className={classes.mainCard}>
                        <div>
                            <div className={classes.inputWrapTwo}>
                                <h3>Email</h3>
                                <input placeholder="Email" />
                            </div>
                            <div className={classes.inputWrapTwo}>
                                <h3>Password</h3>
                                <input placeholder="Password" />
                            </div>
                            <div className={classes.checkboxWrap}>
                                <input type="checkbox" />
                                <div>Set default</div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.btnWrap}>
                                <div>Save</div>
                            </div>
                            <div className={classes.btnWrap2}>
                                <div>Cancel</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {stripeOpt === "stripe" && <div></div>}
            {cardOpt === "card" && (
                <div>
                    <div className={classes.cardHeading}>Add Card Details</div>
                    <div className={classes.mainCard}>
                        <div>
                            <div className={classes.inputWrapTwo}>
                                <h3>Name On Card</h3>
                                <input placeholder="Name On Card" />
                            </div>
                            <div className={classes.inputWrapTwo}>
                                <h3>Card Number</h3>
                                <input placeholder="Card Number" />
                            </div>
                            <div className={classes.inputWrapTwo}>
                                <h3>Expiry Date (MM/YY)</h3>
                                <input placeholder="Expiry Card (mm/yy)" />
                            </div>
                            <div className={classes.inputWrapTwo}>
                                <h3>Security Code CVV</h3>
                                <input placeholder="Security Code CVV" />
                            </div>
                            <div className={classes.checkboxWrap}>
                                <input type="checkbox" />
                                <div>Set default</div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.btnWrap}>
                                <div>Save</div>
                            </div>
                            <div className={classes.btnWrap2}>
                                <div>Cancel</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PaymentComp;
