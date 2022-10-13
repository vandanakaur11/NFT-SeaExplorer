import React, { useState } from "react";
// import { Drawer, Button } from "antd";
import { Drawer } from "antd";
import "antd/dist/antd.css";
import classes from "./SideDrawer.module.css";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
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
import profileIcon from "../../images/bxs_user-account.svg";
import messageIcon from "../../images/jam_messages-f.svg";

import Referrals from "../referrals/Referrals";
import logoutImg from "../../images/logoutImg.png";

const SideDrawer = ({ chooseData, setShowPage }) => {
    const history = useNavigate();
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    function choosePath(path) {
        if (path === "login") {
            history("/login");
        }
        if (path === "signup") {
            history("/signup");
        }
    }
    return (
        <>
            <MenuOutlined onClick={showDrawer} className={classes.menuIcon} />
            {chooseData !== "dash" && (
                <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible} getContainer={false}>
                    <div className={classes.optionWrap}>
                        <div>Home</div>
                        <div>About</div>
                        <div>Pricing</div>
                        <div>Features</div>
                        <div>Our clients</div>
                    </div>
                    <div className={classes.btnWrap}>
                        <div onClick={() => choosePath("login")}>Login</div>
                        <div onClick={() => choosePath("signup")}>SignUp</div>
                        {/* <div>SeaUpload</div> */}
                    </div>
                    <div className={classes.seaBtn}>SeaUpload</div>
                </Drawer>
            )}
            {chooseData === "dash" && (
                <Drawer title="Basic Drawer" placement="left" onClose={onClose} visible={visible} getContainer={false}>
                    <div className={classes.optionGenNft}>
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
                        <div className={classes.sideoption} onClick={() => setShowPage("payment plans")}>
                            <img alt="" src={Paymentplans} />
                            <div>Payment plans</div>
                        </div>
                        <div className={classes.sideoption} onClick={() => setShowPage("referrals")}>
                            <img alt="" src={referal} />
                            <div>Referrals</div>
                        </div>
                        {/* <div className={classes.sideHeading2}>
                            <div>Payments</div>
                            <img alt="" src={bottomarr} />
                        </div> */}
                        <div className={classes.sideoption} onClick={() => setShowPage("Account Setting")}>
                            <img alt="" src={setting} />
                            <div>Settings</div>
                        </div>
                        <div className={classes.sideoption}>
                            <img alt="" src={logoutImg} />
                            <div>Logout</div>
                        </div>
                        {/* <div className={classes.sideoption}>
                            <img alt="" src={setting} />
                            <div>Settings</div>
                        </div>
                        <div className={classes.sideoption}>
                            <img alt="" src={setting} />
                            <div>Logout</div>
                        </div> */}
                    </div>
                </Drawer>
            )}
        </>
    );
};

export default SideDrawer;
