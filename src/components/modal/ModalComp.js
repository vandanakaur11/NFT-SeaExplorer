import React, { useState, useEffect, useContext } from "react";
import { Modal, Button } from "antd";
import { useForm } from "react-hook-form";
import classes from "./ModalComp.module.css";
import discordColor from "../../images/discordColor.png";
import googleColor from "../../images/googleColor.png";
import twitterColor from "../../images/twitterColor.png";
import mainIcon from "../../images/mainIcon.png";
import lockIcon from "../../images/lockIcon.png";
import userIcon from "../../images/userIcon.png";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import OtpComp from "../otpComp/OtpComp";
import axios from "axios";
import { AppContext } from "../../contexrStore/Store";

const isValidEmail = (email) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
    );

const ModalComp = ({ chooseData, handleModal, setHandleModal }) => {
    // console.log("render");
    const history = useNavigate();
    const { appState, applyAction } = useContext(AppContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const handleEmailValidation = (email) => {
        const isValid = isValidEmail(email);

        const validityChanged = (errors.email && isValid) || (!errors.email && !isValid);
        if (validityChanged) {
            console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
        }

        return isValid;
    };

    const [isModalVisible, setIsModalVisible] = useState(false);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [fname, setFname] = useState("");
    // const [lname, setLname] = useState("");
    const [forgot, setForgot] = useState(false);
    const [Sign, setSign] = useState(false);
    const [GoOtp, setGoOtp] = useState(false);
    const [email, setEmal] = useState("");
    const [warnMessage, setWarnMessage] = useState("");
    const [confirmPass, setConfirmPass] = useState(false);
    const [getOtpData, setOtpData] = useState("");

    const showModal = () => {
        setIsModalVisible(true);
    };
    const showModalLogin = () => {
        setIsModalVisible(true);
        setHandleModal("login");
        setGoOtp(false);
        setConfirmPass(false);
    };
    const showModalSignUp = () => {
        setIsModalVisible(true);
        setHandleModal("signin");
    };
    const showModalSeaUpload = () => {
        // setIsModalVisible(true);
        // setHandleModal("login");
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setForgot(false);
    };
    const onSubmit = async (body) => {
        // let signUpBody = data;

        try {
            const confirmation = await axios.post("http://localhost:3030/api/v1/user/signup", body);
            console.log(confirmation);
            if (!confirmation.data.Error) {
                reset(undefined);
                setIsModalVisible(false);
            }

            if (confirmation.data.Error) {
                setWarnMessage(confirmation.data.message);

                setTimeout(() => {
                    setWarnMessage("");
                }, 3000);
            }
        } catch (error) {}
    };

    async function submitLogin(body) {
        console.log(body);
        try {
            const {
                data: { Error, email, message, token },
            } = await axios.post("http://localhost:3030/api/v1/user/login", body);

            if (!Error) {
                let auth = {
                    email,
                    token,
                };
                auth = JSON.stringify(auth);
                localStorage.setItem("auth", auth);
                applyAction("set-auth", auth);
                reset(undefined);
                history("/dashboard");
            } else {
                setWarnMessage(message);

                setTimeout(() => {
                    setWarnMessage("");
                }, 3000);
            }
        } catch (error) {
            console.log(`Error: `, error.message);
        }
    }

    const requestOtp = async (body) => {
        console.log(body);

        const requestForm = {
            email: body.email,
        };
        console.log(requestForm);
        try {
            const {
                data: { Error, message },
            } = await axios.post("http://localhost:3030/api/v1/user/request-otp", requestForm);
            console.log(message);
            if (!Error) {
                setEmal(body.email);
                setGoOtp(true);
                reset(undefined);
            } else {
                setWarnMessage(message);

                setTimeout(() => {
                    setWarnMessage("");
                }, 3000);
            }
        } catch (error) {
            console.log(`Error: `, error.message);
        }
    };

    const VerifyOtp = async () => {
        try {
            const {
                data: { Error, message },
            } = await axios.post("http://localhost:3030/api/v1/user/verify-otp", { email: email, code: getOtpData });
            console.log(message);
            if (!Error) {
                setConfirmPass(true);
                reset(undefined);
            } else {
                setWarnMessage(message);
                setTimeout(() => {
                    setWarnMessage("");
                }, 3000);
            }
        } catch (error) {
            console.log(`Error Message: `, error.message);
        }
    };

    const resetPassowrd = async (body) => {
        let { password, Cpassword } = body;
        if (password && Cpassword && password === Cpassword) {
            const changePass = {
                email: email,
                newPassword: Cpassword,
            };

            try {
                const {
                    data: { message },
                } = await axios.post(`http://localhost:3030/api/v1/user/change-password`, changePass);
                if (message) {
                    reset();
                    setConfirmPass(false);
                    setGoOtp(false);
                    setForgot(false);
                }
            } catch (error) {
                console.log(`ErrorL ${error.message}`);
            }
        } else {
            setWarnMessage("Password is not match!");
            setTimeout(() => {
                setWarnMessage("");
            }, 3000);
        }
    };
    const google = async () => {
        // window.open("http://localhost:3030/api/v1/auth/google", "_self");
        history("/dashboard");
    };

    const discord = () => {
        // window.open("http://localhost:3030/api/v1/auth/discord", "_self");
        history("/dashboard");
    };
    return (
        <>
            {chooseData === "login" && <div onClick={showModalLogin}>Login</div>}
            {chooseData === "signin" && <div onClick={showModalSignUp}>SignUp</div>}
            {chooseData === "seaupload" && <div onClick={showModalSeaUpload}>SeaUpload</div>}
            {chooseData === "nftcollect" && <div onClick={showModal}>NFT Generated</div>}

            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className={classes.modalWrap}>
                {/* <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p> */}
                {handleModal === "login" && !forgot && !GoOtp && (
                    <div className={classes.mainWrap}>
                        <h1>Login</h1>
                        <div>
                            <form onSubmit={handleSubmit(submitLogin)}>
                                <div className={classes.innerWrap}>
                                    <div className={classes.inpWrap}>
                                        <img src={mainIcon} alt="" />

                                        <input placeholder="Enter Email" {...register("email", { required: true })} />
                                    </div>

                                    <div className={classes.inpWrap}>
                                        <img src={lockIcon} alt="" />
                                        <input type="password" placeholder="Enter Password" {...register("password", { required: true })} />
                                    </div>

                                    <div className={classes.forgot} onClick={() => setForgot(true)}>
                                        Forgot Password
                                    </div>
                                    <p className={classes.alert2}>{warnMessage}</p>
                                    <input className={classes.btn} type="submit" placeholder="Login" />
                                </div>
                            </form>
                        </div>
                        <div className={classes.iconWrap}>
                            <img src={discordColor} alt="" onClick={discord} />
                            <img src={googleColor} alt="" onClick={google} />
                            <img src={twitterColor} alt="" />
                        </div>

                        <div className={classes.already}>
                            Dont have an account? <span onClick={() => setHandleModal("signin")}>SignUp</span>
                        </div>
                    </div>
                )}

                {/*
                    sign up form start 
                */}
                {handleModal === "signin" && !forgot && (
                    <div className={classes.mainWrap}>
                        <h1>SignUp</h1>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={classes.innerWrap}>
                                    <div className={classes.inpWrap}>
                                        <img src={userIcon} alt="" />
                                        <input type="text" placeholder="Enter First Name" {...register("firstname", { required: true })} />
                                    </div>

                                    <ErrorMessage errors={errors} />
                                    <ErrorMessage
                                        errors={errors}
                                        name="firstname"
                                        render={({ message }) => <p className={classes.alert}>First name is required!</p>}
                                    />

                                    <div className={classes.inpWrap}>
                                        <img src={userIcon} alt="" />
                                        <input type="text" placeholder="Enter Last Name" {...register("lastname", { required: true })} />
                                    </div>

                                    <ErrorMessage errors={errors} />
                                    <ErrorMessage
                                        errors={errors}
                                        name="lastname"
                                        render={({ message }) => <p className={classes.alert}>Last name is required!</p>}
                                    />

                                    <div className={classes.inpWrap}>
                                        <img src={mainIcon} alt="" />
                                        <input
                                            placeholder="Choose Email"
                                            {...register("email", { validate: handleEmailValidation, required: true })}
                                        />
                                    </div>

                                    <ErrorMessage errors={errors} />
                                    <ErrorMessage
                                        errors={errors}
                                        name="email"
                                        render={({ message }) => <p className={classes.alert}>Last name is required!</p>}
                                    />

                                    <div className={classes.inpWrap}>
                                        <img src={lockIcon} alt="" />
                                        <input
                                            type="password"
                                            placeholder="Choose Password"
                                            {...register("password", { minLength: 6, required: true })}
                                        />
                                    </div>

                                    <ErrorMessage errors={errors} />
                                    <ErrorMessage
                                        errors={errors}
                                        name="password"
                                        render={({ message }) => <p className={classes.alert}>Password is not reach minimum length!</p>}
                                    />
                                    <p className={classes.alert2}>{warnMessage}</p>
                                    <input className={classes.btn} type="submit" placeholder="Singup" />
                                </div>
                            </form>
                        </div>
                        <div className={classes.iconWrap}>
                            <img src={discordColor} alt="" onClick={discord} />
                            <img src={googleColor} alt="" onClick={google} />
                            <img src={twitterColor} alt="" />
                        </div>
                    </div>
                )}

                {/*
                    sign up form end 
                */}

                {forgot === true && !GoOtp && (
                    <div className={classes.mainWrap}>
                        <h1>Reset Password</h1>
                        <form className={classes.innerWrap} onSubmit={handleSubmit(requestOtp)}>
                            <div className={classes.inpWrap}>
                                <img src={mainIcon} alt="" />
                                <input
                                    placeholder="Choose Email"
                                    {...register("email", { validate: handleEmailValidation, required: true })}
                                />
                            </div>
                            <ErrorMessage errors={errors} />
                            <ErrorMessage
                                errors={errors}
                                name="email"
                                render={({ message }) => <p className={classes.alert}>Invalid Email!</p>}
                            />
                            <p className={classes.alert2}>{warnMessage}</p>
                            <input className={classes.btn} type="submit" placeholder="Signup" />
                        </form>
                    </div>
                )}
                {GoOtp && forgot && !confirmPass && (
                    <div className={classes.mainWrap}>
                        <h1>Enter OTP</h1>
                        <div className={classes.innerWrap}>
                            <div className={classes.inpWrapOtp}>
                                {/* <img src={mainIcon} alt="" />
                                <input
                                    type="email"
                                    placeholder="Choose Email"
                                    {...register("email", { pattern: "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/", required: true })}
                                /> */}
                                <OtpComp setOtpData={setOtpData} />
                                <p className={classes.alert2}>{warnMessage}</p>
                            </div>
                            <input className={classes.btn2} type="submit" placeholder="Signup" onClick={() => VerifyOtp()} />
                        </div>
                    </div>
                )}
                {confirmPass && forgot && (
                    <div className={classes.mainWrap}>
                        <h1>Choose New Password</h1>
                        <form className={classes.innerWrap} onSubmit={handleSubmit(resetPassowrd)}>
                            <div className={classes.inpWrapOtp}>
                                <input
                                    className={classes.inpWrapConfirm}
                                    type="password"
                                    placeholder="Enter New Password"
                                    {...register("password")}
                                />
                                <input
                                    className={classes.inpWrapConfirm}
                                    type="password"
                                    placeholder="Confirm New Password"
                                    {...register("Cpassword")}
                                />
                            </div>
                            <p className={classes.alert2}>{warnMessage}</p>
                            <input className={classes.btn2} type="submit" placeholder="Signup" />
                        </form>
                    </div>
                )}
                {chooseData === "nftcollect" && (
                    <div>
                        <div className={classes.nftGenDiv}>
                            <h1>NFT Collection Generated Successfully</h1>
                            <div className={classes.nftGenBtn}>Ok</div>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
};

export default ModalComp;
