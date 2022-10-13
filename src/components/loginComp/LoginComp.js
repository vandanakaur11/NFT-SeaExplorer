import React from "react";
import classes from "./LoginComp.module.css";
import discordColor from "../../images/discordColor.png";
import googleColor from "../../images/googleColor.png";
import twitterColor from "../../images/twitterColor.png";
import mainIcon from "../../images/mainIcon.png";
import lockIcon from "../../images/lockIcon.png";
import userIcon from "../../images/userIcon.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function LoginComp() {
    const history = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    function choosePath(path) {
        if (path === "forgot") {
            history("/forgot");
        }
        if (path === "dash") {
            history("/dashboard");
        }
    }
    return (
        <div className={classes.main}>
            <div className={classes.mainWrap}>
                <h1>Login</h1>
                <div>
                    <form>
                        <div className={classes.innerWrap}>
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
                            <div className={classes.forgot} onClick={() => choosePath("forgot")}>
                                Forgot Password
                            </div>
                            <input className={classes.btn} type="submit" placeholder="Singup" onClick={() => choosePath("dash")} />
                        </div>
                    </form>
                </div>
                <div className={classes.iconWrap}>
                    <img src={discordColor} alt="" />
                    <img src={googleColor} alt="" />
                    <img src={twitterColor} alt="" />
                </div>

                <div className={classes.already}>
                    Dont have an account? <span onClick={() => {}}>SignUp</span>
                </div>
            </div>
        </div>
    );
}

export default LoginComp;
