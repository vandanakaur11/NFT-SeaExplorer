import React, { useState } from "react";
import classes from "./AccountSetting.module.css";
import edit from "../../images/edit.svg";
import security from "../../images/security.svg";
import payment from "../../images/payment.svg";
import delet from "../../images/delete.svg";
import notification from "../../images/noti.svg";
import EditProfile from "../editProfile/EditProfile";
import Security from "../security/Security";
import PaymentComp from "../paymentComp/PaymentComp";
import NotificationComp from "../notificationComp/NotificationComp";
import DeleteAccComp from "../deleteAccComp/DeleteAccComp";

const AccountSetting = () => {
    const [selectedOpt, setSelectedOpt] = useState("EditPro");
    const [paypalOpt, setPaypalOpt] = useState("");
    const [cardOpt, setCardOpt] = useState("");
    const [stripeOpt, setStripeOpt] = useState("");
    return (
        <div className={classes.main}>
            <div className={classes.heading}>Account Setting</div>
            <div className={classes.mainContainer}>
                <div className={classes.leftpanal}>
                    <div
                        className={selectedOpt === "EditPro" ? classes.nav : classes.navSelected}
                        onClick={() => setSelectedOpt("EditPro")}
                    >
                        <img src={edit} className={classes.icons} alt=""></img>
                        <span>Edit Profile</span>
                    </div>
                    <div
                        className={selectedOpt === "Security" ? classes.nav : classes.navSelected}
                        onClick={() => setSelectedOpt("Security")}
                    >
                        <img src={security} className={classes.icons} alt=""></img>
                        <span>Security</span>
                    </div>
                    <div
                        className={selectedOpt === "Payment" ? classes.nav : classes.navSelected}
                        onClick={() => setSelectedOpt("Payment")}
                    >
                        <img src={payment} className={classes.icons} alt=""></img>
                        <span>Payment</span>
                    </div>
                    <div className={selectedOpt === "Noti" ? classes.nav : classes.navSelected} onClick={() => setSelectedOpt("Noti")}>
                        <img src={notification} className={classes.icons} alt=""></img>
                        <span>Notification</span>
                    </div>
                    <div className={selectedOpt === "Del" ? classes.nav : classes.navSelected} onClick={() => setSelectedOpt("Del")}>
                        <img src={delet} className={classes.icons} alt=""></img>
                        <span>Delete Account</span>
                    </div>
                </div>
                <div className={classes.rightpanal}>
                    {selectedOpt === "EditPro" && <EditProfile />}
                    {selectedOpt === "Security" && <Security />}
                    {selectedOpt === "Payment" && (
                        <PaymentComp
                            paypalOpt={paypalOpt}
                            setPaypalOpt={setPaypalOpt}
                            cardOpt={cardOpt}
                            setCardOpt={setCardOpt}
                            stripeOpt={stripeOpt}
                            setStripeOpt={setStripeOpt}
                        />
                    )}
                    {selectedOpt === "Noti" && <NotificationComp />}
                    {selectedOpt === "Del" && <DeleteAccComp />}
                </div>
            </div>
        </div>
    );
};

export default AccountSetting;
