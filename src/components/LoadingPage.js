import React from "react";

import "../css/LoadingPage.css"



const LoadingPage = (props) => {
    var loaded = false
    return (
        <div className="entire-page">
            <div onLoad={() => {loaded = true}} className={`box ${() => {if (loaded) {return 'loaded'} else {return}}}`}>
                <div className="circle">
                    <div className="box-text">Loading...</div>
                </div>
            </div>
        </div>
    )
}

export default LoadingPage