import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter App</h1>

      <h2>{count.value}</h2>

      <br />
      <button onClick={() => dispatch(increment({number:1,name:"increment"}))}>Increment by 1</button>
      <button onClick={() => dispatch(increment({number:10,name:"increment"}))}>Increment by 10</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;