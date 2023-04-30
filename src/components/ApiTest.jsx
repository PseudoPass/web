import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ApiTest = () => {
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_HOSTNAME}/did/test`, {withCredentials: true})
            .then(res => {
                console.log(res)
            })
        // axios.get('http://localhost:4000/user')
    })
    return (
        <div>

        </div>
    );
};
export default ApiTest;
