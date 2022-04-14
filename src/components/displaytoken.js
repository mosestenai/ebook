import React from "react";
import { getTokenSession } from "../Utils/Common";


const DisplayToken = () =>{
    const token = getTokenSession();
    return<div>
        <div style={{
            margin: 20
        }}>
            The position  of the word in the sentence is between {token[0]} and {token[1]}
        </div>
       
    </div>;
}

export default DisplayToken;