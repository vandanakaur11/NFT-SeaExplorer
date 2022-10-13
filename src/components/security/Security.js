import React from "react";
import classes from "./Security.module.css";

function Security() {
    return (
        <div className={classes.main}>
            <div>
                <div className={classes.inputWrapTwo}>
                    <h3>Country</h3>
                    <input placeholder="Enter Country" />
                </div>
                <div className={classes.inputWrapTwo}>
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

export default Security;
