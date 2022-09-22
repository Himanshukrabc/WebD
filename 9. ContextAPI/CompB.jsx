import React from "react";
import {firstName, lastName} from "./App"

function CompB(){
    return (
        <firstName.Consumer>
            {(fname)=>{
                return(
                    <lastName.Consumer>
                        {(lname)=>{
                            return(
                                <h1>{fname} {lname}</h1>
                            );
                        }}
                    </lastName.Consumer>
                );
            }}
        </firstName.Consumer>
    );
}

export default CompB;