import IdentificationCard from "../components/IdentificationCard/IdentificationCard";
import './styles/IDCardPage.css';
import React from "react";
import {useNavigate} from "react-router-dom";
const IDCardPage = (props) => {
    const { profile } = props;
    const navigate = useNavigate();


    return(
        <div className={"main-container"}>
            { !profile ? navigate('/login') :
            <div>
                <img src={profile.imageUri} alt="user image" />
                <p>Name: {profile.displayName}</p>
                <p>Email Address: {profile.email}</p>
                <br />
                <br />
            </div>
            }
        </div>
    );
}

export default IDCardPage;