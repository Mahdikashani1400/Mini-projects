import React from "react";
import UseCounter from "../hooks/UseCounter";

export default function Counter() {
  const [count, addCount, minusCount] = UseCounter(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={addCount}>+</button>
      <button onClick={minusCount}>-</button>
    </div>
  );
}
