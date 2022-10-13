import React from "react";
import classes from "./SignUpComp.module.css";
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
                <h1>SignUp</h1>
                <div>
                    <form onSubmit={{}}>
                        <div className={classes.innerWrap}>
                            <div className={classes.inpWrap}>
                                <img src={userIcon} alt="" />
                                <input type="text" placeholder="Enter First Name" {...register("firstname", { required: true })} />
                            </div>
                            <div className={classes.inpWrap}>
                                <img src={userIcon} alt="" />
                                <input type="text" placeholder="Enter Last Name" {...register("lastname", { required: true })} />
                            </div>
                            <div className={classes.inpWrap}>
                                <img src={mainIcon} alt="" />
                                <input
                                    type="email"
                                    placeholder="Choose Email"
                                    {...register("email", { pattern: "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/", required: true })}
                                />
                            </div>
                            <div className={classes.inpWrap}>
                                <img src={lockIcon} alt="" />
                                <input
                                    type="password"
                                    placeholder="Choose Password"
                                    {...register("password", { minLength: 6, required: true })}
                                />
                            </div>
                            <input className={classes.btn} type="submit" placeholder="Singup" />
                        </div>
                    </form>
                </div>
                <div className={classes.iconWrap}>
                    <img src={discordColor} alt="" />
                    <img src={googleColor} alt="" />
                    <img src={twitterColor} alt="" />
                </div>
            </div>
        </div>
    );
}

export default SignUpComp;
