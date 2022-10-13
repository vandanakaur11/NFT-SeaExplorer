import React, { Component, useState } from "react";
import OtpInput from "react-otp-input";
import classes from "./OtpComp.module.css";

const OTP = ({ setForOtp, setOtpData }) => {
    const [otp, setOtp] = useState("");
    function handleChange(otp) {
        setOtp(otp);
        setOtpData(otp)
    }
    // setForOtp(otp);
    console.log(otp);
    return (
        <div style={{ width: "auto" }} className={classes.optDesign}>
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={
                    <span>
                        <strong>.</strong>
                    </span>
                }
                inputStyle={{
                    width: "100%",
                    // height: "3rem",
                    height: "50px",
                    margin: "12px",
                    fontSize: "2rem",
                    borderRadius: 60,
                    border: "3px solid var(--purpleShadeOne)",
                }}
            />
        </div>
    );
};

export default OTP;
