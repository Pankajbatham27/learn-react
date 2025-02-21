import { createContext, useEffect, useState } from "react";

export const MessageContaxt = createContext();

export const MessageProvider = ({children}) => {

const [message, setMessage] = useState("Computer");
    
    return (
        <MessageContaxt.Provider value={{message, setMessage}}>
        {children}
        </MessageContaxt.Provider>
    )
}

// export {MessageContaxt, MessageProvider};