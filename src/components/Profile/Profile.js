import React from "react";
import classes from "./Profile.module.css";
import profileImage from "../../images/Rectangle 5.svg";
import LineChart from "../LineChart/LineChart";
import TableComp from "../tableComp/TableComp";

const Profile = () => {
    return (
        <div className={classes.main}>
            <div className={classes.heading}>Profile</div>
            <div className={classes.profileContainer}>
                <div className={classes.profileCard}>
                    <img src={profileImage} className={classes.profileImg} alt=""></img>
                    <div className={classes.name}>Anddy’s Makeover</div>
                    <div className={classes.id}>ID: 123546557658678</div>
                    <div className={classes.emialContainer}>
                        <div className={classes.tag}>Email: </div>
                        <div className={classes.tagvalue}>abc@gmail.com</div>
                    </div>
                    <div className={classes.emialContainer}>
                        <div className={classes.tag}>Subscription Plan: </div>
                        <div className={classes.tagvalue}> Starter</div>
                    </div>
                    <div className={classes.emialContainer}>
                        <div className={classes.tag}>Total Collections: </div>
                        <div className={classes.tagvalue}>20</div>
                    </div>
                </div>
                {/* <div className={classes.chartContainr}>
                    <div className={classes.refralBonus}>
                      
                        <LineChart />
                    </div>
                    <div className={classes.amount}> </div>
                </div> */}
                <div className={classes.tableContainer}>
                    <TableComp />
                </div>
            </div>
        </div>
    );
};

export default Profile;
