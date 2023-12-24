import React, { Component } from "react";
import TodoCeckbox from "./TodoCeckbox";
import TodoDeleteBtn from "./TodoDeleteBtn";

export default class TodoTask extends Component {
  render() {
    return (
      <>
        <div className="flex justify-between items-center bg-neutral-800 text-sm leading-5 font-normal text-gray-200 p-4 rounded-lg  border border-gray-700 shadow-lg gap-x-3 relative">
          <TodoCeckbox className="z-10"></TodoCeckbox>
          <p className="text-left w-fit text-white ml-2">
            {this.props.todoText}
          </p>
          <TodoDeleteBtn></TodoDeleteBtn>
        </div>
      </>
    );
  }
}
