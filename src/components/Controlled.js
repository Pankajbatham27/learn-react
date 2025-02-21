import { useState } from "react";

const Controlled = () => {

    const [name, setName] = useState();

    const updateName = (props) => {
        setName(props.target.value)
    }

    const submitHandler = () => {
        alert(`This is ${name}`)
    }

    return (
        <div>
            <input onChange={updateName} />
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}
export default Controlled;