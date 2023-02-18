import "./styles/LoginPage.css";
import "./styles/HomePage.css";
import GoogleLoginButton from "../components/Login/GoogleLoginButton";
import React from "react";


const LoginPage = (props) => {
    const { setUser }  = props;

    return (
        <div className={"main-container"}>
            <div className={"login-text"}>Login using SJSU Credentials</div>
            <GoogleLoginButton
                setUser={setUser}
            />
        </div>

    );
}

export default LoginPage;