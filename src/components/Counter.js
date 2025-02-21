import { useContext, useReducer } from "react";
import { MessageContaxt } from "./MessageContext";

const initialState = {
    count: 0
}

const reducerFunction = (state, action) => {
    switch (action.type) {
        case "increment":
            
            return {...state, count: state.count + 1}

        case "decrement":
            
            return {...state, count: state.count - 1}

        case "reset":
            
            return {...state, count: 0}
    
        default:

        return state;
            
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducerFunction, initialState);

    const { message } = useContext(MessageContaxt);

    return (
        <>
        <h1>{message}: {state.count}</h1>
        <button onClick={() => dispatch({type: "increment"})}>Increment</button>
        <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
        <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </>
    )
}
export default Counter;