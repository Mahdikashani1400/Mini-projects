import React, { Component } from "react";
import { CiCirclePlus } from "react-icons/ci";

export default class TodoCreateBtn extends Component {
  constructor(props) {
    super(props);
  }
  clickHandler() {
    this.props.onCreate();
  }
  render() {
    return (
      <>
        <a
          href="#"
          className="inline-flex p-4 justify-center items-center gap-x-2 rounded-lg bg-cyan-700 text-white transition-all duration-[400ms] hover:bg-cyan-500"
          onClick={this.clickHandler.bind(this)}
        >
          create <CiCirclePlus className="w-5 h-5"></CiCirclePlus>
        </a>
      </>
    );
  }
}
