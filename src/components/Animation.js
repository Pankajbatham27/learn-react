import { Button } from "@mui/material";
import { useState } from "react";

const Animation = () => {

    const [show, setShow] = useState(false);
    const [move, setMove] = useState(false);
    const [rotate, setRotate] = useState(false);


    return (
        <>
        

        <div style={{marginBottom: 5}}>
        <Button variant="contained" onClick={() => setShow(!show)}>Show/Hide</Button>
        <Button variant="contained" onClick={() => setMove(!move)}>Move</Button>
        <Button variant="contained" onClick={() => setRotate(!rotate)}>Rotate</Button>
        <Button variant="contained" onClick={() => setRotate(!rotate)}>Rotate</Button>
        <Button variant="contained" onClick={() => setRotate(!rotate)}>Rotate</Button>
        </div>
        

        <div className={`boxAnimation ${show ? 'show' : ''} ${move ? 'move' : ''} ${rotate ? 'rotate' : ''}`}></div>
        
        </>
        
    )
}
export default Animation;