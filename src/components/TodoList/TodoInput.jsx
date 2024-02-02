import React, { useState, useEffect } from "react";
// import React, { Component, PureComponent } from "react";

export default function TodoInput(props) {
  let [inputValue, setInputValue] = useState("");
  const [subCounter, setSubCounter] = useState(0);
  let [delCounter, setDelCounter] = useState(0);
  function onChangeHandler(e) {
    // console.log(e.nativeEvent.target.value);

    setInputValue(e.nativeEvent.target.value);
    setSubCounter(props.submitCounter);
    setDelCounter(props.removeState === "Y" ? delCounter + 1 : 0);
    props.onChange(e.nativeEvent.target.value);
  }
  useEffect(() => {
    // console.log("mount");
  }, []);
  useEffect(() => {
    // console.log("update");
  });

  inputValue =
    subCounter !== props.submitCounter ||
    (props.removeState === "Y" && !delCounter)
      ? ""
      : inputValue;

  return (
    <>
      <input
        type="text"
        className="p-4 flex items-center gap-2 flex-1 rounded-lg border border-black/90 bg-neutral-800 md:w-[638px] sm:w-[500px]  w-[320px] text-base font-normal leading-5 text-gray-100 focus-visible:border-blue-800/85 focus-visible:outline-none"
        placeholder="todo..."
        value={inputValue}
        onChange={onChangeHandler.bind(this)}
      />
      {/* {(props.removeState === "Y" && (
        <input
          type="text"
          className="p-4 flex items-center gap-2 flex-1 rounded-lg border border-black/90 bg-neutral-800 md:w-[638px] sm:w-[500px]  w-[320px] text-base font-normal leading-5 text-gray-100 focus-visible:border-blue-800/85 focus-visible:outline-none"
          placeholder="todo..."
          onChange={onChangeHandler.bind(this)}
        />
      )) || (
        <input
          type="text"
          className="p-4 flex items-center gap-2 flex-1 rounded-lg border border-black/90 bg-neutral-800 md:w-[638px] sm:w-[500px]  w-[320px] text-base font-normal leading-5 text-gray-100 focus-visible:border-blue-800/85 focus-visible:outline-none"
          placeholder="todo..."
          onChange={onChangeHandler.bind(this)}
          value={inputValue}
        />
      )} */}
    </>
  );
}

// class component

// export default class TodoInput extends Component {
//   constructor(props) {
//     // console.log("TodoInput => constructor :4");

//     super(props);
//     this.state = {
//       inputValue: "",
//       subCounter: 0,
//     };
//     this.delControler = 0;
//   }
//   componentDidMount() {
//     // console.log("TodoInput => componentDidMount :7");
//   }
//   static getDerivedStateFromProps(props, state) {
//     // console.log("TodoInput => getDerivedStateFromProps :5");
//     return null;
//   }
//   onChangeHandler(e) {
//     // console.log(e.nativeEvent.target.value);
//     this.props.value === "_-."
//       ? (this.delControler = 1)
//       : (this.delControler = 0);
//     this.setState({
//       inputValue: e.nativeEvent.target.value,
//       subCounter: this.props.submitCounter,
//     });
//     this.props.onChange(e.nativeEvent.target.value);
//   }
//   // shouldComponentUpdate() {
//   //   // console.log("TodoInput => shouldComponentUpdate");

//   //   return true;
//   // }

//   render() {
//     // console.log("TodTodoInputoList => render :6");
//     this.state.inputValue =
//       this.state.subCounter !== this.props.submitCounter ||
//       (this.props.value === "_-." && !this.delControler)
//         ? ""
//         : this.state.inputValue;
//     return (
//       <>
//         <input
//           type="text"
//           className="p-4 flex items-center gap-2 flex-1 rounded-lg border border-black/90 bg-neutral-800 md:w-[638px] sm:w-[500px]  w-[320px] text-base font-normal leading-5 text-gray-100 focus-visible:border-blue-800/85 focus-visible:outline-none"
//           placeholder="todo..."
//           onChange={this.onChangeHandler.bind(this)}
//           value={this.state.inputValue}
//         />
//       </>
//     );
//   }
// }
