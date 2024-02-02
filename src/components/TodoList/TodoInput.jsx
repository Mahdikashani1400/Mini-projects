import React, { useState } from "react";
// import React, { Component, PureComponent } from "react";

export default function TodoInput(props) {
  let [inputValue, setInputValue] = useState("");
  const [subCounter, setSubCounter] = useState(0);
  let [delControl, setDelControl] = useState(0);
  function onChangeHandler(e) {
    // console.log(e.nativeEvent.target.value);

    setInputValue(e.nativeEvent.target.value);
    setSubCounter(props.submitCounter);
    setDelControl((prevState) => {
      return props.removeState === "Y" ? prevState + 1 : 0;
    });
    props.onChange(e.nativeEvent.target.value);
  }

  console.log(props.removeState, delControl, subCounter, props.submitCounter);

  delControl =
    props.removeState === "Y"
      ? delControl !== 0
        ? delControl
        : 0
      : delControl;
  inputValue =
    subCounter !== props.submitCounter ||
    (props.removeState === "Y" && delControl === 0)
      ? ""
      : inputValue;

  return (
    <>
      <input
        type="text"
        className="p-4 flex items-center gap-2 flex-1 rounded-lg border border-black/90 bg-neutral-800 md:w-[638px] sm:w-[500px]  w-[320px] text-base font-normal leading-5 text-gray-100 focus-visible:border-blue-800/85 focus-visible:outline-none"
        placeholder="todo..."
        onChange={onChangeHandler.bind(this)}
        value={inputValue}
      />
    </>
  );
}
