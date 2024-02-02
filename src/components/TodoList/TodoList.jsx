// import React, { Component, PureComponent } from "react";
import React, { useState } from "react";
import TodoCeckbox from "./TodoCeckbox";
import TodoHeader from "./TodoHeader";
import TodoCreateBtn from "./TodoCreateBtn";
import TodoDeleteBtn from "./TodoDeleteBtn";
import TodoInput from "./TodoInput";
import TodoTask from "./TodoTask";
import "./todolist.css";

// functional component

export default function TodoList(props) {
  const [todoList, setTodoList] = useState([]);
  const [removeState, setRemoveState] = useState("N");
  let newTodoValue = "";

  function onChangeInputHandler(todoValue) {
    newTodoValue = todoValue;
  }
  function createTodoHandler() {
    newTodoValue.trim() &&
      setTodoList((prevState) => {
        return [
          ...prevState,
          {
            id: prevState.length ? prevState[prevState.length - 1]?.id + 1 : 1,
            todoText: newTodoValue.trim(),
            isDone: false,
          },
        ];
      });
    setRemoveState("N");
  }
  function onclickTodoHandler(todoId) {
    setTodoList((prevState) => {
      let newTodoList = prevState.map((todo) => {
        if (todo.id == todoId) {
          todo.isDone ? (todo.isDone = false) : (todo.isDone = true);
        }
        return todo;
      });
      return newTodoList;
    });
    setRemoveState("N");
  }
  function deleteTodoHandler(todoId) {
    setTodoList((prevState) => {
      let newTodoList = prevState.filter((todo) => {
        return todo.id !== todoId;
      });
      return newTodoList;
    });
    setRemoveState("Y");
  }
  // newTodoValue = "";
  return (
    <>
      <div className="h-full w-full font-Inter">
        <TodoHeader></TodoHeader>
        <div className="relative w-full flex justify-center min-h-lvh bg-neutral-900 md:px-8 px-4">
          <div className="flex flex-col items-center w-[762px]">
            <div className="absolute flex flex-col sm:flex-row items-center justify-center -top-[26px]  gap-4">
              <TodoInput
                onChange={onChangeInputHandler.bind(this)}
                value={newTodoValue}
                submitCounter={todoList.length}
                removeState={removeState}
              ></TodoInput>
              <TodoCreateBtn
                onCreate={createTodoHandler.bind(this)}
              ></TodoCreateBtn>
            </div>
            <div className="mt-24 pt-10 sm:pt-0 mb-6 flex justify-between w-full">
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
              {todoList.map((todo) => (
                <TodoTask
                  key={todo.id}
                  {...todo}
                  onclick={onclickTodoHandler.bind(this)}
                  delClick={deleteTodoHandler.bind(this)}
                ></TodoTask>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// class component

// export default class TodoList extends PureComponent {
//   constructor(props) {
//     // console.log("TodoList => constructor :1");

//     super(props);
//     this.state = {
//       todoList: [],
//     };
//     this.newTodoValue = "";
//   }
//   componentDidMount() {
//     // console.log("TodoList => componentDidMount :8");
//   }
//   static getDerivedStateFromProps(props, state) {
//     // console.log("TodoList => getDerivedStateFromProps :2");
//     return null;
//   }
//   getSnapshotBeforeUpdate(props, state) {
//     console.log("getSnapshotBeforeUpdate");
//     return "fake data";
//   }
//   componentDidUpdate(props, state, data) {
//     console.log(data, "componentDidUpdate");
//   }
//   onChangeInputHandler(todoValue) {
//     this.newTodoValue = todoValue;
//   }
//   createTodoHandler() {
//     this.newTodoValue.trim() &&
//       this.newTodoValue !== "_-." &&
//       this.setState((prevState) => {
//         return {
//           todoList: [
//             ...prevState.todoList,
//             {
//               id: prevState.todoList.length
//                 ? prevState.todoList[prevState.todoList.length - 1]?.id + 1
//                 : 1,
//               todoText: this.newTodoValue.trim(),
//               isDone: false,
//             },
//           ],
//         };
//       });
//   }
//   onclickTodoHandler(todoId) {
//     this.setState({
//       todoList: this.state.todoList.map((todo) => {
//         if (todo.id == todoId) {
//           todo.isDone ? (todo.isDone = false) : (todo.isDone = true);
//         }
//         return todo;
//       }),
//     });
//   }
//   deleteTodoHandler(todoId) {
//     this.newTodoValue = "_-.";

//     this.setState({
//       todoList: this.state.todoList.filter((todo) => {
//         return todo.id !== todoId;
//       }),
//     });
//   }
//   render() {
//     // console.log("TodoList => render :3");
//     this.newTodoValue = "";

//     return (
//       <>
//         <div className="h-full w-full font-Inter">
//           <TodoHeader></TodoHeader>
//           <div className="relative w-full flex justify-center min-h-lvh bg-neutral-900 md:px-8 px-4">
//             <div className="flex flex-col items-center w-[762px]">
//               <div className="absolute flex flex-col sm:flex-row items-center justify-center -top-[26px]  gap-4">
//                 <TodoInput
//                   onChange={this.onChangeInputHandler.bind(this)}
//                   value={this.newTodoValue}
//                   submitCounter={this.state.todoList.length}
//                 ></TodoInput>
//                 <TodoCreateBtn
//                   onCreate={this.createTodoHandler.bind(this)}
//                 ></TodoCreateBtn>
//               </div>
//               <div className="mt-24 pt-10 sm:pt-0 mb-6 flex justify-between w-full">
//                 <a href="#">
//                   <span className="text-sky-400">count of Task</span>
//                   <span className="py-0.5 px-2 text-xs inline-block ml-3 rounded-2xl bg-stone-700 text-white">
//                     5
//                   </span>
//                 </a>
//                 <a href="#">
//                   <span className="text-purple-500">Task Done!</span>
//                   <span className="py-0.5 px-2 text-xs inline-block ml-3 rounded-2xl bg-stone-700 text-white">
//                     5
//                   </span>
//                 </a>
//               </div>
//               <div className="flex flex-col gap-3 w-full text-left">
//                 {this.state.todoList.map((todo) => (
//                   <TodoTask
//                     key={todo.id}
//                     {...todo}
//                     onclick={this.onclickTodoHandler.bind(this)}
//                     delClick={this.deleteTodoHandler.bind(this)}
//                   ></TodoTask>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
