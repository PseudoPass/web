import "./styles/LoginPage.css";
import "./styles/HomePage.css";
import GoogleLoginButton from "../components/Login/GoogleLoginButton";
import React from "react";


const LoginPage = (props) => {
    const user = props.user;
    const setProfile = props.setProfile;
    const setUser = props.setUser;

    return (
        <div className={"main-container"}>
            <div className={"login-text"}>Login using SJSU Credentials</div>
            <GoogleLoginButton
                user={user}
                setProfile={setProfile}
                setUser={setUser}
            />
        </div>

    );
}

export default LoginPage;