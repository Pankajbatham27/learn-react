import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/counterSlice";

const ReduxCounter = () => {

    const count = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();


    return (
        <div>
            <h1>Current Count : {count}</h1>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementByValue(5))}>Increment By 5</button>

            </div>
        </div>
    )
}
export default ReduxCounter;