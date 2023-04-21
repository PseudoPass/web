import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ApiTest = () => {
    useEffect(() => {
        axios.get('http://localhost:4000/did/test', {withCredentials: true})
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
