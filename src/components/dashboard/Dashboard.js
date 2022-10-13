import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "antd";
import classes from "./Dashboard.module.css";
import SeaExplorerLogoDark from "../../images/SeaExplorerLogoDark.png";
import Auditlogs from "../../images/Auditlogs.png";
import bottomarr from "../../images/bottomarr.png";
import uparr from "../../images/uparr.png";
import collection from "../../images/collection.png";
import doubletick from "../../images/doubletick.png";
import handshake from "../../images/handshake.png";
import referal from "../../images/referal.png";
import setting from "../../images/setting.png";
import twinarr from "../../images/twinarr.png";
import Paymentplans from "../../images/Paymentplans.png";
import bell from "../../images/bell.png";
import search from "../../images/search.png";
import idPic from "../../images/idPic.png";
import MainDashboard from "../mainDashboard/MainDashboard";
import GenerateNFT from "../generateNft/GenerateNFT";
import Collection from "../collection/Collection";
import EachCollection from "../eachCollection/EachCollection";
import { useNavigate } from "react-router-dom";
import SideDrawer from "../sideDrawer/SideDrawer";
import logoNew1 from "../../images/logoNew1.png";
import profileIcon from "../../images/bxs_user-account.svg";
import messageIcon from "../../images/jam_messages-f.svg";
import ProfileDropDown from "../profileDropDown/ProfileDropDown";
import axios from "axios";
import MessagesScreen from "../messagesScreen/MessagesScreen";
import PaymentPlans from "../PaymentPlans/PaymentPlans";
import Profile from "../Profile/Profile";
import AccountSetting from "../Account Setting/AccountSetting";
import { AppContext } from "../../contexrStore/Store";
import Referrals from "../referrals/Referrals";
import logoutImg from "../../images/logoutImg.png";

function Dashboard() {
    const [showPage, setShowPage] = useState("front");
    const { appState, applyAction } = useContext(AppContext);
    const history = useNavigate();
    async function choosePath() {
        // if (appState.auth.token) {
        //     const {
        //         data: { Error, message },
        //         data,
        //     } = await axios.post("http://localhost:3030/api/v1/user/auth/check", { token: appState.auth?.token });
        //     if (Error) {
        //         localStorage.clear();
        //         history("/");
        //     }
        // }
    }

    const logout = () => {
        localStorage.clear();
        // window.open("http://localhost:3030/api/v1/auth/logout", "_self");
        history("/");
    };

    const setData = (collectionId) => {
        localStorage.setItem("collection_id", collectionId);
        setShowPage("eachcollection");
    };
    useEffect(async () => {
        // if (appState.auth?.token) {
        //     const {
        //         data: { Error, message },
        //         data,
        //     } = await axios.post("http://localhost:3030/api/v1/user/auth/check", { token: appState.auth?.token });
        //     if (Error) {
        //         localStorage.clear();
        //         history("/");
        //     } else {
        //         const {
        //             data: { message },
        //         } = await axios.post("http://localhost:3030/api/v1/user/user-info", { token: appState.auth?.token });
        //         const user = JSON.stringify(message);
        //         localStorage.setItem("user", user);
        //     }
        // } else {
        //     history("/");
        // }
    }, []);

    return (
        <div>
            <Row>
                <Col md={4} className={classes.forSidebarShow}>
                    <div className={classes.sidebar}>
                        <div className={classes.logo}>
                            <img src={logoNew1} alt="" onClick={() => choosePath()} />
                        </div>
                        <div className={classes.sideCont}>
                            {/* <div className={classes.sideHeading}>
                                <div>Payments</div>
                                <img alt="" src={uparr} />
                            </div> */}
                            <div className={classes.sideoption} onClick={() => setShowPage("front")}>
                                <img alt="" src={twinarr} />
                                <div>Dashboard</div>
                            </div>
                            <div className={classes.sideoption} onClick={() => setShowPage("generateNFT")}>
                                <img alt="" src={twinarr} />
                                <div>Generat nft</div>
                            </div>
                            <div className={classes.sideoption} onClick={() => setShowPage("collection")}>
                                <img alt="" src={collection} />
                                <div>My Collection</div>
                            </div>
                            <div className={classes.sideoption} onClick={() => setShowPage("profile")}>
                                <img alt="" src={profileIcon} />
                                <div>Profile</div>
                            </div>
                            <div className={classes.sideoption} onClick={() => setShowPage("messages")}>
                                <img alt="" src={messageIcon} />
                                <div>Messages</div>
                            </div>
                            {/* <div className={classes.sideoption}>
                                <img alt="" src={twinarr} />
                                <div>Payment Plans</div>
                            </div> */}
                            <div className={classes.sideoption} onClick={() => setShowPage("payment plans")}>
                                <img alt="" src={Paymentplans} />
                                <div>Payment plans</div>
                            </div>
                            {/* <div className={classes.sideHeading2}>
                                <div>Commerce</div>
                                <img alt="" src={bottomarr} />
                            </div> */}
                            <div className={classes.sideoption} onClick={() => setShowPage("referrals")}>
                                <img alt="" src={referal} />
                                <div>Referrals</div>
                            </div>
                            {/* <div className={classes.sideoption}>
                                <img alt="" src={Auditlogs} />
                                <div>Audit logs</div>
                            </div> */}
                            <div className={classes.sideoption} onClick={() => setShowPage("Account Setting")}>
                                <img alt="" src={setting} />
                                <div>Settings</div>
                            </div>
                            <div className={classes.sideoption}>
                                <img alt="" src={logoutImg} />
                                <div onClick={logout}>Logout</div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={20} className={classes.isTabletNot}>
                    <div className={classes.header}>
                        <div className={classes.search}>
                            <img alt="" src={search} />
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className={classes.userWrap}>
                            <img alt="" src={bell} className={classes.bellIcon} />
                            <div className={classes.userInfo}>
                                {/* <img alt="" src={idPic} />
                                <div>
                                    <div>Anddy’s Makeover</div>
                                    <div>ID: 1234567</div>
                                </div> */}
                                <ProfileDropDown setShowPage={setShowPage} />
                            </div>
                        </div>
                    </div>
                    <div className={classes.pageContent}>
                        {showPage === "front" && <MainDashboard />}
                        {showPage === "generateNFT" && <GenerateNFT showPage={showPage} />}
                        {showPage === "collection" && <Collection setData={setData} />}
                        {showPage === "eachcollection" && <EachCollection />}
                        {showPage === "messages" && <MessagesScreen />}
                        {showPage === "payment plans" && <PaymentPlans />}
                        {showPage === "profile" && <Profile />}
                        {showPage === "Account Setting" && <AccountSetting />}
                        {showPage === "referrals" && <Referrals />}
                    </div>
                </Col>
                <Col md={24} className={classes.isTablet}>
                    <div className={classes.header}>
                        <div>
                            <SideDrawer chooseData={"dash"} setShowPage={setShowPage} />
                        </div>
                        <div className={classes.search}>
                            <img alt="" src={search} />
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className={classes.userWrap}>
                            <img alt="" src={bell} className={classes.bellIcon} />
                            <div className={classes.userInfo}>
                                <img alt="" src={idPic} />
                                <div>
                                    <div>Anddy’s Makeover</div>
                                    <div>ID: 1234567</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.pageContent}>
                        {showPage === "front" && <MainDashboard />}
                        {showPage === "generateNFT" && <GenerateNFT />}
                        {showPage === "collection" && <Collection setShowPage={setShowPage} />}
                        {showPage === "eachcollection" && <EachCollection />}
                        {showPage === "messages" && <MessagesScreen />}
                        {showPage === "payment plans" && <PaymentPlans />}
                        {showPage === "profile" && <Profile />}
                        {showPage === "Account Setting" && <AccountSetting />}
                        {showPage === "referrals" && <Referrals />}
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard;
