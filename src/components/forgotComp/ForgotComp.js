import React from "react";
import classes from "./ForgotComp.module.css";
import discordColor from "../../images/discordColor.png";
import googleColor from "../../images/googleColor.png";
import twitterColor from "../../images/twitterColor.png";
import mainIcon from "../../images/mainIcon.png";
import lockIcon from "../../images/lockIcon.png";
import userIcon from "../../images/userIcon.png";
import { useForm } from "react-hook-form";

function SignUpComp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className={classes.main}>
            <div className={classes.mainWrap}>
                <h1>Reset Password</h1>
                <div className={classes.innerWrap}>
                    <div className={classes.inpWrap}>
                        <img src={mainIcon} />
                        <input
                            type="email"
                            placeholder="Choose Email"
                            {...register("email", { pattern: "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/", required: true })}
                        />
                    </div>
                    <input className={classes.btn} type="submit" placeholder="Singup" />
                </div>
            </div>
        </div>
    );
}

export default SignUpComp;
