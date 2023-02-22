import React from "react";
import "./styles/LoginPage.css";
import "./styles/HomePage.css"
import GoogleLoginButton from "../components/Login/GoogleLoginButton";

const LoginPage = (props) => {
    const { setProfile } = props;
    return (
        <div className={"main-container"}>
            <div className={"login-text"}>Login using SJSU Credentials</div>
            <GoogleLoginButton setProfile={setProfile} />
        </div>

    );
}

export default LoginPage;