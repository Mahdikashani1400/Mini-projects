import React, { Component } from "react";

export default class ProductBox extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props };

    // this.growPrice = this.growPrice.bind(this);
  }
  growPrice() {
    // way-1
    // this.setState({ price: this.state.price + 10 });
    // ----------
    // how ?
    // let userInfo = { name: "ali", age: 27 };
    // const updateProperty = { age: 32 }
    // userInfo = { ...userInfo, ...updateProperty };
    // console.log(userInfo);
    // ---------------
    // way-2
    this.setState((prevState) => {
      //   console.log(prevState);
      return { price: prevState.price + 10 };
    });
  }
  render() {
    return (
      <div
        className="p-5 shadow-lg bg-white rounded-md"
        // onClick={this.growPrice.bind(this)}
        // onClick={this.growPrice}
        onClick={() => this.growPrice()}
      >
        <div className="content flex flex-col items-center">
          <div className="w-full pb-7 border-b border-black/20">
            <img
              className="w-full h-[250px] rounded-md"
              src={`/products/${this.state.img}.jpg`}
              alt=""
            />
          </div>
          <div className="flex justify-between text-md w-full pt-5 font-semibold text-zinc-700">
            <p>{this.state.price} تومان</p>
            <p>{this.state.name}</p>
          </div>
        </div>
      </div>
    );
  }
}
