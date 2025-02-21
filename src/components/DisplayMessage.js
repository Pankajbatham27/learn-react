import { useContext } from "react";
// import { MessageContaxt } from "./MessageContext";
import { ColorContext } from "./Contexts/ColorContaxt";

const DisplayMessage = () => {

    // const {message} = useContext(MessageContaxt);

    const {color} = useContext(ColorContext);


    return (
        <>
        {color}
        </>
        
        
    )
}
export default DisplayMessage;