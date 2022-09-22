import React, { createContext } from "react";
import CompA from "./CompA";

// Context API:
//     This is used when we need to pass some data from parent component to some successor multiple layers deep.
    
//     parent component --> componentA --> componentB --> componentC 
//         |--------------------------------------------------^

//     It has 3 parts:
//     1.) Initialise Context using createContext()
//     2.) State the provider and  wrap the  child with the provider tags
//     3.) State the consumer 

const firstName = createContext();
const lastName = createContext();

function App(){
    return(
        <>
            <firstName.Provider value="Himanshu">
                <lastName.Provider value="Kumar">
                    <CompA/>
                </lastName.Provider>
            </firstName.Provider>
        </>
    );
}

export default App;
export {firstName,lastName};