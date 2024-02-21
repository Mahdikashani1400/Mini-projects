import React, { useState, useEffect } from "react";

export default function UseCounter(init) {
  const [count, setCount] = useState(init);
  function addCount() {
    setCount((prevState) => prevState + 1);
  }
  function minusCount() {
    setCount((prevState) => prevState - 1);
  }
  return [count, addCount, minusCount];
}
