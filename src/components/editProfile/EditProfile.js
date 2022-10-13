import React from "react";
import avatarImgEd from "../../images/avatarImgEd.png";
import classes from "./EditProfile.module.css";

function EditProfile() {
    return (
        <div>
            <div className={classes.imgWrap}>
                <img src={avatarImgEd} alt="" />
            </div>
            <div className={classes.inputWrapOne}>
                <div>
                    <h3>First Name</h3>
                    <input placeholder="Enter Your Name" />
                </div>
                <div>
                    <h3>Last Name</h3>
                    <input placeholder="Enter Your Name" />
                </div>
            </div>
            <div className={classes.inputWrapTwo}>
                <h3>Email Address</h3>
                <input placeholder="Enter Your Email" />
            </div>
            <div className={classes.inputWrapTwo}>
                <h3>Address</h3>
                <input placeholder="Address" />
            </div>
            <div className={classes.inputWrapOne}>
                <div>
                    <h3>City</h3>
                    <input placeholder="Enter City" />
                </div>
                <div>
                    <h3>State</h3>
                    <input placeholder="Enter State" />
                </div>
            </div>
            <div className={classes.inputWrapOne}>
                <div>
                    <h3>Country</h3>
                    <input placeholder="Enter Country" />
                </div>
                <div>
                    <h3>Zipcode</h3>
                    <input placeholder="Enter Zipcode" />
                </div>
            </div>
            <div className={classes.btnWrap}>
                <div>Save</div>
            </div>
        </div>
    );
}

export default EditProfile;
