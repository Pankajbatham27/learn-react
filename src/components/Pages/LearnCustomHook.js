import { Button } from "@mui/material";
import useCounter from "../Hooks/useCounter";
import { ThumbUp } from "@mui/icons-material";
import useFetch from "../Hooks/useFetch";

const LearnCustomHook = () => {
  const { count, increment } = useCounter(10);

  const { data, error, loading } = useFetch("https://fakestoreapi.com/productss");

//   console.log(data);

  console.log(error);

  return (
    <>
      {/* <h1>{count}</h1>
        <Button variant="contained" onClick={increment}>Increment</Button>
        <Button variant="contained" onClick={decrement}>Decrement</Button>
        <Button variant="contained" onClick={reset}>Reset</Button> */}

      <Button variant="outlined" startIcon={<ThumbUp />} onClick={increment}>
        {count} Like
      </Button>
    </>
  );
};
export default LearnCustomHook;
