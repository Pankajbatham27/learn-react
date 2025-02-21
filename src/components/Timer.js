import { useEffect, useState } from "react";

const Timer = () => {
  const [state, setState] = useState({ name: '', age: 0, gender: 'Male' });

  const UpdateTime = () => {
    setState(prev => ({ ...prev, name: 'Pankaj', age: 30 }))
  }

  return (
    <>
      <h1>{state.name}</h1>
      <h2>{state.age}</h2>
      <h2>{state.gender}</h2>
      <button onClick={UpdateTime}>Set Value</button>
    </>
  );
};
export default Timer;
