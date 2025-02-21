import { useRef } from "react";

const UncontrolledComponent = () => {

   const nameRef = useRef();


    const submitHandler = (e) => {
        e.preventDefault();

        console.log(nameRef.current.type)
    }

    return (
        
        <form onSubmit={submitHandler}>
            <input type="text" ref={nameRef} />
            <button type="submit">Submit</button>
        </form>
        
    )
}
export default UncontrolledComponent;