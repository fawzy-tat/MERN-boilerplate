import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../src/store/actions";
import { decrement } from "../../src/store/actions";

const ReduxExample = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
    </>
  );
};

export default ReduxExample;
