import React, { Component } from "react";
import TodoCeckbox from "./TodoCeckbox";
import TodoHeader from "./TodoHeader";
import TodoCreateBtn from "./TodoCreateBtn";
import TodoDeleteBtn from "./TodoDeleteBtn";
import TodoInput from "./TodoInput";
import TodoTask from "./TodoTask";
import "./todolist.css";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
    this.newTodoValue = "";
  }

  onChangeInputHandler(todoValue) {
    this.newTodoValue = todoValue;
  }
  createTodoHandler() {
    this.newTodoValue.trim() &&
      this.setState((prevState) => {
        return {
          todoList: [
            ...prevState.todoList,
            {
              id: prevState.todoList.length + 1,
              todoText: this.newTodoValue.trim(),
              isDone: false,
            },
          ],
        };
      });
  }
  render() {
    return (
      <>
        <div className="h-full w-full font-Inter">
          <TodoHeader></TodoHeader>
          <div className="relative w-full flex justify-center pb-20 bg-neutral-900">
            <div className="flex flex-col items-center w-[762px]">
              <div className="absolute flex items-center justify-center -top-[26px] gap-x-4">
                <TodoInput
                  onChange={this.onChangeInputHandler.bind(this)}
                  value={this.newTodoValue}
                ></TodoInput>
                <TodoCreateBtn
                  onCreate={this.createTodoHandler.bind(this)}
                ></TodoCreateBtn>
              </div>
              <div className="mt-24 mb-6 flex justify-between w-full">
                <a href="#">
                  <span className="text-sky-400">count of Task</span>
                  <span className="py-0.5 px-2 text-xs inline-block ml-3 rounded-2xl bg-stone-700 text-white">
                    5
                  </span>
                </a>
                <a href="#">
                  <span className="text-purple-500">Task Done!</span>
                  <span className="py-0.5 px-2 text-xs inline-block ml-3 rounded-2xl bg-stone-700 text-white">
                    5
                  </span>
                </a>
              </div>
              <div className="flex flex-col gap-3 w-full text-left">
                {this.state.todoList.map((todo) => (
                  <TodoTask key={todo.id} {...todo}></TodoTask>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
