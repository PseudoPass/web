import NavigationBar from "../components/NavigationBar/NavigationBar";
import IdentificationCard from "../components/IdentificationCard/IdentificationCard";
import './styles/IDCardPage.css';
import React from "react";
import {googleLogout} from "@react-oauth/google";
const IDCardPage = (props) => {
    const { profile, setProfile, setUser } = props;

    const logOut = () => {
        googleLogout();
        setProfile(null);
        setUser(null);
    };

    return(
        <div>
            <NavigationBar />
            {/*<IdentificationCard />*/}
            <div>
                <img src={profile.picture} alt="user image" />
                <h3>User Logged in</h3>
                <p>Name: {profile.name}</p>
                <p>Email Address: {profile.email}</p>
                <br />
                <br />
                <button onClick={logOut}>Log out</button>
            </div>
        </div>
    );
}

export default IDCardPage;