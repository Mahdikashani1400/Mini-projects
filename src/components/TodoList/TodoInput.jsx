import React, { Component } from "react";

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      subCounter: 0,
    };
  }

  onChangeHandler(e) {
    // console.log(e.nativeEvent.target.value);

    this.setState((prevState) => {
      return {
        inputValue: e.nativeEvent.target.value,
        subCounter: this.props.submitCounter,
      };
    });
    this.props.onChange(e.nativeEvent.target.value);
  }

  render() {
    return (
      <>
        <input
          type="text"
          className="p-4 flex items-center gap-2 flex-1 rounded-lg border border-black/90 bg-neutral-800 md:w-[638px] sm:w-[500px]  w-[320px] text-base font-normal leading-5 text-gray-100 focus-visible:border-blue-800/85 focus-visible:outline-none"
          placeholder="todo..."
          onChange={this.onChangeHandler.bind(this)}
          value={
            this.props.value === "d" ||
            this.state.subCounter !== this.props.submitCounter
              ? ""
              : this.state.inputValue
          }
        />
      </>
    );
  }
}
