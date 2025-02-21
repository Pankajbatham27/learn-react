import { useContext } from "react";
import { MessageContaxt } from "./MessageContext";

const UpdateContextValue = () => {

    const { setMessage } = useContext(MessageContaxt);

    return (
        <button onClick={() => setMessage("Hello World!")}>Update Context Value</button>
    )
}
export default UpdateContextValue;