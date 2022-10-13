import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link, Routes, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginComp from "./components/loginComp/LoginComp";
import SignUpComp from "./components/signUpComp/SignUpComp";
import ForgotComp from "./components/forgotComp/ForgotComp";
import Dashboard from "./components/dashboard/Dashboard";
import { useEffect, useState } from "react";
import { AppContext } from "./contexrStore/Store";
import axios from "axios";

function App() {
    const initialState = {
        layers: [],
        selectedLayer: "",
        selectedImages: [],
    };
    initialState.auth = localStorage.getItem("auth");

    initialState.auth = JSON.parse(initialState.auth);

    const [appState, setAppState] = useState(initialState);

    const applyAction = (action, payload) => {
        switch (action) {
            case "set-auth":
                setAppState((pre) => ({
                    ...pre,
                    auth: payload,
                }));
                break;
            case "add-layer":
                setAppState((pre) => ({
                    ...pre,
                    layers: payload,
                }));
                break;
            case "select-action":
                const images = appState.layers.filter((ele) => {
                    if (ele.name === appState.selectedLayer) {
                        return ele.images;
                    }
                });

                setAppState((pre) => ({
                    ...pre,
                    selectedLayer: payload,
                    selectedImages: images,
                }));
                break;
            case "discard-generate-nft":
                setAppState((pre) => ({
                    ...pre,
                    selectedLayer: "",
                    layers: [],
                    selectedImages: [],
                }));
                break;
            default:
                break;
        }
    };

    useEffect(async () => {}, []);
    return (
        <AppContext.Provider value={{ appState, applyAction }}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route exact path="/login" element={<LoginComp />} />
                    <Route exact path="/signup" element={<SignUpComp />} />
                    <Route exact path="/forgot" element={<ForgotComp />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </AppContext.Provider>
    );
}

export default App;
