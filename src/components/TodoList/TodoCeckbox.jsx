import React, { Component, PureComponent } from "react";
import { FaCheck } from "react-icons/fa6";

export default function TodoCeckbox(props) {
  function onChangeHandler() {
    props.onclick();
  }
  return (
    <>
      <input type="checkbox" name="" id="" onChange={onChangeHandler} />
      <div className=" checkbox__container flex items-center justify-center w-[17.5px] h-[17.5px] p-1 border-2 rounded-full border-sky-500">
        <FaCheck className="absolute text-white hidden  w-2.5 h-2.5 "></FaCheck>
      </div>
    </>
  );
}
