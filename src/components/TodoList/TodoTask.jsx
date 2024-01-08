import React, { Component, PureComponent } from "react";
import TodoCeckbox from "./TodoCeckbox";
import TodoDeleteBtn from "./TodoDeleteBtn";

export default class TodoTask extends Component {
  constructor(props) {
    super(props);
  }
  onclickTodo() {
    // console.log(this.props.onclick);
    // this.props.onclick(this.props.id);
  }
  clickToDel() {
    this.props.delClick(this.props.id);
  }
  shouldComponentUpdate(props, state) {
    if (this.props.todoText === props.todoText) {
      return false;
    }
    return true;
  }
  getSnapshotBeforeUpdate(props, state) {
    return 19;
  }
  componentDidUpdate(props, state, data) {
    // console.log(data);
  }
  componentWillUnmount() {
    console.log("bye");
  }

  render() {
    return (
      <>
        <div className="flex justify-between items-center bg-neutral-800 text-sm leading-5 font-normal text-gray-200 p-4 rounded-lg  border border-gray-700 shadow-lg gap-x-3 relative mx-2">
          <TodoCeckbox
            className="z-10"
            onclick={this.onclickTodo.bind(this)}
          ></TodoCeckbox>
          <p className="text-left w-fit text-white ml-2">
            {this.props.todoText}
          </p>
          <TodoDeleteBtn onclick={this.clickToDel.bind(this)}></TodoDeleteBtn>
        </div>
      </>
    );
  }
}
