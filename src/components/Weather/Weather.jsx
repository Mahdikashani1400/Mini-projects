import React, { Component } from "react";

export default class Weather extends Component {
  render() {
    return (
      <div className="weather component__container bg-[#E2C112] overflow-y-hidden relative ">
        <div className=" shape right-6 -bottom-[322px]"></div>
        <div className=" shape left-6 -top-[322px] rotate-90"></div>
        <div className="container ">
          <div className="weather__content relative h-lvh mx-10 rounded-[20px] px-25 py-20">
            <div className="bg rounded-[20px]"></div>
            <div className="border border-[#7D7878] rounded-xl bg-black/40 shadow-md shadow-[#7D7878] flex justify-between items-center py-8 px-10 relative z-20">
              <div className="text-left">
                <h4 className="text-pink-600 mb-5 text-3xl font-semibold">
                  Tehran
                </h4>
                <p className="">
                  {" "}
                  <span className="text-yellow-400 font-bold text-5xl ">
                    40°c
                  </span>
                  <span className="text-white text-xl pl-3">rainy</span>
                </p>
              </div>
              <div className="text-white text-xl ">
                <p>Air quality : 20 - Good</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
