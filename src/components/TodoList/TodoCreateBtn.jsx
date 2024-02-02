import React, { Component, PureComponent } from "react";
import { CiCirclePlus } from "react-icons/ci";

export default function TodoCreateBtn(props) {
  function clickHandler() {
    props.onCreate();
  }
  return (
    <>
      <a
        href="#"
        className="inline-flex lg:p-4 p-3 justify-center items-center gap-x-2 rounded-lg bg-cyan-700 text-white transition-all duration-[400ms] hover:bg-cyan-500"
        onClick={clickHandler}
      >
        create <CiCirclePlus className="w-5 h-5"></CiCirclePlus>
      </a>
    </>
  );
}
