import { useEffect, useState } from "react";

const Debouncing = () => {

    const [inputValue, setInputValue] = useState("");

    const inputHandler = (e) => {
        setInputValue(e.target.value);
        
    }


    useEffect(() => {

        const timeHandler = setTimeout(() => {
            if(inputValue.length > 0){
                fetch(`https://fakestoreapi.com/products/`).then(response => response.json()).then(result => console.log(result))
            }
            
        }, 500);

        return () => {
            clearTimeout(timeHandler);
        }
        
    },[inputValue])

    return (
        <>
        <input type="text" placeholder="Search..." value={inputValue} onChange={inputHandler} />
        </>
    )
}
export default Debouncing;