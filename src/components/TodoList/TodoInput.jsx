import React, { Component } from "react";

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      propsValue: this.props.value,
    };
  }

  onChangeHandler(e) {
    // console.log(e.nativeEvent.target.value);
    this.setState({
      inputValue: e.nativeEvent.target.value,
      propsValue: this.props.value,
    });
    this.props.onChange(e.nativeEvent.target.value);
  }
  setkss() {
    this.setState({
      propsValue:
        this.props.value == this.state.propsValue
          ? this.props.value + "&"
          : this.props.value + "&&",
    });
  }

  render() {
    // onChangeHandler();
    console.log(this.state.propsValue);
    return (
      <>
        <input
          type="text"
          className="p-4 flex items-center gap-2 flex-1 rounded-lg border border-black/90 bg-neutral-800 w-[638px] text-base font-normal leading-5 text-gray-100 focus-visible:border-blue-800/85 focus-visible:outline-none"
          placeholder="todo..."
          onChange={this.onChangeHandler.bind(this)}
          value={
            this.state.propsValue !== this.state.inputValue
              ? this.state.inputValue
              : ""
          }
        />
      </>
    );
  }
}
