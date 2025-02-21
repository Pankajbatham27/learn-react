import { Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

const CalculationPractice = () => {
    
    const [count, setCount] = useState(1);
    const [word, setWord] = useState("");

    const complaxCals = (count) => {

        console.log("This function is calling....")
        let value = 0;
        for (let index = 0; index < 1000000000; index++) {
            
            value =+ index;
            
        }

        return count;

    }
    // useEffect(() => {

    // },[])

    const rememberValue = useMemo(() => complaxCals(count), [count])

    
    return (
        <>
        
        <p>Function Value: {rememberValue}</p>
        <p>Textbox Value: {word}</p>
        <Button onClick={() => setCount(count+1)} variant="contained">Increase</Button>
        <input type="text" onChange={(e) => setWord(e.target.value)} />
        </>
        
    )
}
export default CalculationPractice;