import React, { useContext, useEffect } from "react";
import FeaturedProject from "../components/featuredProject/FeaturedProject";
import Testimonial from "../components/testimonial/Testimonial";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import FrontDisplay from "../components/frontDisplay/FrontDisplay";
import BlockChainHeading from "../components/blockchainHeading/BlockChainHeading";
import Features from "../components/features/Features";
import Pricing from "../components/pricing/Pricing";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import { AppContext } from "../contexrStore/Store";

const authenticateUser = async () => {
    let socialId = window.location.href;

    if (socialId.includes("id")) {
        let index = socialId.indexOf("=");
        socialId = socialId.slice(index + 1, socialId.length);
        if (socialId !== null || socialId !== "null") {
            try {
                const { data } = await axios.post("http://localhost:3030/api/v1/user/loginWithSocial", { socialId });
                if (data.Error) return false;
                let auth = {
                    email: data.email,
                    token: data.token,
                };
                auth = JSON.stringify(auth);
                localStorage.setItem("auth", auth);
                return auth;
            } catch (error) {
                console.log(`Error: ${error.message}`);
                return false;
            }
        } else {
            return false;
        }
    }
};

function MainPage() {
    const navigate = useNavigate();
    const { appState, applyAction } = useContext(AppContext);
    // useEffect(async () => {
    //     let isAuthenticat = await authenticateUser();
    //     if (isAuthenticat) {
    //         isAuthenticat = JSON.parse(isAuthenticat);
    //         applyAction("set-auth", isAuthenticat);
    //         navigate("/dashboard");
    //     }

    //     if (appState.auth?.token) {
    //         const {
    //             data: { Error, message },
    //             data,
    //         } = await axios.post("http://localhost:3030/api/v1/user/auth/check", { token: appState.auth?.token });

    //         if (!Error) {
    //             navigate("/dashboard");
    //         } else {
    //             localStorage.clear();
    //             navigate("/");
    //         }
    //     }
    // }, []);

    return (
        <div>
            <div>
                <div className="wrapper">
                    <Header />
                    <FrontDisplay />
                </div>
                <BlockChainHeading />
                <Features />
                <Pricing />
                <FeaturedProject />
                <Testimonial />
                <Footer />
            </div>
        </div>
    );
}

export default MainPage;
