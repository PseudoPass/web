import "./styles/LoginPage.css";
import "./styles/HomePage.css"
import GoogleLoginButton from "../components/Login/GoogleLoginButton";
import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const LoginPage = (props) => {
    return (
        <div className={"main-container"}>
            <div className={"login-text"}>Login using SJSU Credentials</div>
            <GoogleLoginButton />
        </div>

    );
}

export default LoginPage;