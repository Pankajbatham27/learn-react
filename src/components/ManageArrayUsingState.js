import { useReducer } from "react"



const initialState = {
    name : ""
} 

const reducerFunction = (state, action) => {
    switch (action.type) {
        case 'add':
            return {...state, name: "Pankaj"}
        case 'update':
            return {...state, name: state.name+" Batham"}
        case 'remove':
            return {...state, name: ""}
        default:
            return state;
    }
}

const ManageArrayUsingState = () => {

    

    const [state, dispatch] = useReducer(reducerFunction, initialState);
    
    

    return (
        <>
        <h1>{state.name}</h1>
        <button onClick={() => dispatch({type: "add"})}>Add</button>
        <button onClick={() => dispatch({type: "update"})}>Add LastName</button>
        <button onClick={() => dispatch({type: "remove"})}>Remove</button>
        </>
    )

}
export default ManageArrayUsingState;