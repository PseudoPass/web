import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function App() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>
            <h2>Google Login Test</h2>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
        </div>
    )
}
export default App;