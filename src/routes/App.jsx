import "./styles/HomePage.css";
import React, {useEffect, useState} from 'react';
import LoginPage from "./LoginPage";
import IDCardPage from "./IDCardPage";
import {Route, Routes, useNavigate} from "react-router-dom";
import LoginSuccess from "../components/Login/LoginSuccess";
import HomePage from "./HomePage";
import axios from "axios";

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [profile, setProfile] = useState(null);
    axios.defaults.withCredentials = true


    return (
        <div className={"main-container"}>
            <div>
                {/*<NavigationBar />*/}
                <Routes>
                    <Route exact path={"/"} element={<HomePage />} />
                    <Route exact path={"/login"} element={<LoginPage />} />
                    <Route path={"/login/success"} element={<LoginSuccess />} />
                    <Route path={"id"} element={<IDCardPage />} />
                </Routes>
            </div>
        </div>
    );
}
export default App;