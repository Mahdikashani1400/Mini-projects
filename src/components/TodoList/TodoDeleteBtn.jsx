import React, { Component, PureComponent } from "react";
import { BsTrash } from "react-icons/bs";

export default function TodoDeleteBtn(props) {
  function clickHandle(e) {
    e.preventDefault();
    props.onclick();
  }
  return (
    <>
      <a href="#" className="z-10" onClick={clickHandle}>
        <BsTrash className="w-8 h-8 p-1.5 text-gray-400 transition-all hover:text-red-600  rounded-md "></BsTrash>
      </a>
    </>
  );
}
