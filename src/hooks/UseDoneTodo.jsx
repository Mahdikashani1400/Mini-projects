import React from "react";

export default function UseDoneTodo(todoId, setTodoList) {
  setTodoList((prevState) => {
    let newTodoList = prevState.map((todo) => {
      if (todo.id == todoId) {
        todo.isDone ? (todo.isDone = false) : (todo.isDone = true);
      }
      return todo;
    });
    return newTodoList;
  });
  //   setRemoveState("N");
}
