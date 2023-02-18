import "./styles/HomePage.css";
import React, { useState } from 'react';
import GoogleLoginButton from "../components/Login/GoogleLoginButton";
import {googleLogout} from "@react-oauth/google";
import LoginPage from "./LoginPage";

const Homepage = () => {
    const [ user, setUser ] = useState(null);
    const [ profile, setProfile ] = useState(null);

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <div className={"main-container"}>
            <div className={"logo-text"}>Pseudo Pass</div>
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <LoginPage
                    user={user}
                    setProfile={setProfile}
                    setUser={setUser}
                />
            )}
        </div>
    );
}
export default Homepage;