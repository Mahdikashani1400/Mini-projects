import React from "react";
import { useState } from "react";

export default function UseTodoInput(props) {
  let [inputValue, setInputValue] = useState("");
  const [subCounter, setSubCounter] = useState(0);
  let [delCounter, setDelCounter] = useState(0);
  function onChangeHandler(e) {
    // console.log(e.nativeEvent.target.value);

    setInputValue(e.nativeEvent.target.value);
    setSubCounter(props.submitCounter);
    setDelCounter(props.removeState === "Y" ? delCounter + 1 : 0);
    props.onChange(e.nativeEvent.target.value);
  }

  inputValue =
    subCounter !== props.submitCounter ||
    (props.removeState === "Y" && !delCounter)
      ? ""
      : inputValue;
  return {
    value: inputValue,
    onChange: onChangeHandler.bind(this),
  };
}
