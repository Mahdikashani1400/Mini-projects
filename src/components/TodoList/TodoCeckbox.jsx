import React, { Component } from "react";
import { FaCheck } from "react-icons/fa6";

export default class TodoCeckbox extends Component {
  render() {
    return (
      <>
        <input type="checkbox" name="" id="" />
        <div className=" checkbox__container flex items-center justify-center w-[17.5px] h-[17.5px] p-1 border-2 rounded-full border-sky-500">
          <FaCheck className="absolute text-white hidden  w-2.5 h-2.5 "></FaCheck>
        </div>
      </>
    );
  }
}
