import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import classes from "./ProfileDropDown.module.css";

import accountsetting from "../../images/accountsetting.svg";

import messages from "../../images/messages.svg";
import referal from "../../images/referal.png";
import logoutImg from "../../images/logoutImg.png";

const ProfileDropDown = ({ setShowPage }) => {
    const menu = (
        <div className={classes.menuDiv}>
            <Menu>
                <Menu.Item onClick={() => setShowPage("referrals")}>
                    <img src={referal} className={classes.icons} alt=""></img>
                    <a className={classes.listItem}>Refferals</a>
                </Menu.Item>
                <Menu.Item onClick={() => setShowPage("Account Setting")}>
                    <img src={accountsetting} className={classes.icons} alt=""></img>
                    <a className={classes.listItem}>Settings</a>
                </Menu.Item>
                {/* <Menu.Item>
                    <img src={choseplan} className={classes.icons} alt=""></img>
                    <a className={classes.listItem}>Choose Plan</a>
                </Menu.Item> */}
                <Menu.Item>
                    <img src={logoutImg} className={classes.icons} alt=""></img>
                    <a className={classes.listItem}>Logout</a>
                </Menu.Item>
            </Menu>
        </div>
    );
    return (
        <>
            <div className={classes.mainDiv}>
                <p className={classes.nameAvatar}>AM</p>
                <Dropdown overlay={menu}>
                    <a onClick={(e) => e.preventDefault()} className={classes.userInfo}>
                        <div className={classes.name}>Anddy’s Makeover</div>
                        <div className={classes.id}>
                            <strong>ID: </strong> 91034903849184394381
                        </div>
                        <DownOutlined />
                    </a>
                </Dropdown>
            </div>
        </>
    );
};

export default ProfileDropDown;
