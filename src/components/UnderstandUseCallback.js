import { Button } from "@mui/material";
import { useCallback, useState } from "react";


const UnderstandUseCallback = () => {


    const arr = [1,2,3,4,5];

    const [numbers, setNumbers] = useState(arr);



    const removeValue = useCallback(() => {

        console.log(numbers[0])

        console.log("Running callback function..")
        
        const filterdValue = numbers.filter(item => item != 1);

        setNumbers(filterdValue)
        
    },[])


    
    return (
        <>
        <Button onClick={removeValue} variant="contained">Call Function</Button>
        </>
    )
}
export default UnderstandUseCallback;