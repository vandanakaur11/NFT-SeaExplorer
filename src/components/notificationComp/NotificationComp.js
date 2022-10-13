import React from "react";
import classes from "./NotificationComp.module.css";
import { Switch } from "antd";

function NotificationComp() {
    return (
        <div className={classes.main}>
            <div className={classes.textHeading}>
                Choose how you receive notifications. These notification settings apply to the things you’re watching
            </div>
            <div className={classes.mention}>
                <div>
                    <h3>Mentions</h3>
                    <h5>Notify when another user mentions you in a comment</h5>
                </div>
                <div>
                    <Switch defaultChecked />
                </div>
            </div>
            <div className={classes.mention}>
                <div>
                    <h3>Mentions</h3>
                    <h5>Notify when another user mentions you in a comment</h5>
                </div>
                <div>
                    <Switch defaultChecked />
                </div>
            </div>
            <div className={classes.mention}>
                <div>
                    <h3>Mentions</h3>
                    <h5>Notify when another user mentions you in a comment</h5>
                </div>
                <div>
                    <Switch defaultChecked />
                </div>
            </div>
            <div className={classes.mention}>
                <div>
                    <h3>Mentions</h3>
                    <h5>Notify when another user mentions you in a comment</h5>
                </div>
                <div>
                    <Switch defaultChecked />
                </div>
            </div>
        </div>
    );
}

export default NotificationComp;
