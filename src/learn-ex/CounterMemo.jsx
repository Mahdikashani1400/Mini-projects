import React, { memo, useCallback, useMemo, useState } from "react";

export default function CounterMemo() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  //   const addFunc = () => {
  //     setCount((prevState) => prevState + 1);
  //   };
  //   const minusFunc = () => {
  //     setCount((prevState) => prevState - 1);
  //   };
  const addFunc = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, [count]);
  const minusFunc = useCallback(() => {
    setCount((prevState) => prevState - 1);
  }, [count]);
  return (
    <div>
      <MyBtn add={addFunc} minus={minusFunc} />
      <p>result : {count}</p>

      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="border border-red-600 mt-10 py-2 px-3 rounded-lg"
      />

      <MyValue title={value} />
    </div>
  );
}

const MyBtn = memo(({ add, minus }) => {
  console.log("MyBtn");
  return (
    <>
      <button
        onClick={add}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          margin: "5px",
          fontSize: "20px",
        }}
      >
        +
      </button>
      <button
        onClick={minus}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          margin: "5px",
          fontSize: "20px",
        }}
      >
        -
      </button>
    </>
  );
});

const MyValue = memo(({ title }) => {
  console.log("MyValue");
  return (
    <>
      <div className="text-2xl mt-5">{title}</div>
    </>
  );
});
