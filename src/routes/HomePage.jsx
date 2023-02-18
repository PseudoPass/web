import "./styles/HomePage.css";
import React, {useEffect, useState} from 'react';
import {googleLogout} from "@react-oauth/google";
import LoginPage from "./LoginPage";
import axios from "axios";

const Homepage = () => {
    const [ user, setUser ] = useState(null);
    const [ profile, setProfile ] = useState(null);

    useEffect(() => {
        if(user) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            })
                .then((res) => {
                    setProfile(res.data);

                })
                .catch((err) => console.log(err));
        }

    }, [user])

    const logOut = () => {
        googleLogout();
        setProfile(null);
        setUser(null);
    };

    return (
        <div className={"main-container"}>
            <div className={"logo-text"}>Pseudo Pass</div>
            {
                profile ? (
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
                            setUser={setUser}
                        />
                    )
            }



        </div>
    );
}
export default Homepage;