import "./styles/HomePage.css";
import React, {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import axios from "axios";

const LoginPage = (props) => {
    const [params] = useSearchParams();
    console.log(params);
    console.log();
    const code = params.get("code");
    const scope = params.get("scope");
    const hd = params.get("hd");
    const data = {
        code: code,
        hd: hd,
        scope: scope
    }


    return (
        <div>
            Logging in...
        </div>

    );
}

export default LoginPage;