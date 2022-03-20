import React from 'react';
import "./Error.css";

const Error = ({errorMessage}) => {
    return (
        <div>
            <h1> Error: { errorMessage }</h1>
        </div>
    );
};

export default Error;