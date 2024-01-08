import React, { Component,PureComponent } from "react";
import { BsTrash } from "react-icons/bs";

export default class TodoDeleteBtn extends PureComponent {
  constructor(props) {
    super(props);
  }
  clickHandle(e) {
    e.preventDefault();
    this.props.onclick();
  }
  render() {
    return (
      <>
        <a href="#" className="z-10" onClick={this.clickHandle.bind(this)}>
          <BsTrash className="w-8 h-8 p-1.5 text-gray-400 transition-all hover:text-red-600  rounded-md "></BsTrash>
        </a>
      </>
    );
  }
}
