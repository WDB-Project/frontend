import React from "react";

import "../css/LoadingPage.css"

const LoadingPage = (props) => {
    return (
        <div className="entire-page">
            <div className="box">
                <div className="circle">
                    <div className="box-text">Loading...</div>
                </div>
            </div>
        </div>
    )
}

export default LoadingPage