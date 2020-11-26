import React from 'react';
import ReactDOM from 'react-dom';
import "./EventPage.css" 


class SignUp extends React.Component {
    render() { return (
        <div class = "signup">
            <div class = "signup-title">
                <p class = "signup-title-text"></p>
            </div>
            <div class = "signup-content">
                <p class = "signup-content-text">

                </p>
                <input type = "text" alt = "Enter your name!" class = "signup-form">
                    
                </input>
                <button class = "signup-submit">
                    Go!
                </button>
            </div>
        </div>
    )}
}

export default SignUp