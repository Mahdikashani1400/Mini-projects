import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds,
    };
  }
  updateValues(statement) {
    this.currentTime = new Date();
    this.hours = statement === "start" ? this.currentTime.getHours() + 1 : 0;
    this.minutes = statement === "start" ? this.currentTime.getMinutes() : 0;
    this.seconds = statement === "start" ? this.currentTime.getSeconds() : 0;
  }
  timerHandler(event) {
    if (!this.count) {
      event.target.innerHTML = "finish";
      this.count += 1;
      this.timeControler = setInterval(() => {
        this.updateValues("start");
        this.setState({
          hours: this.hours,
          minutes: this.minutes,
          seconds: this.seconds,
        });
      }, 1000);
    } else {
      this.count = 0;
      event.target.innerHTML = "start";

      clearInterval(this.timeControler);
      this.updateValues("finish");
      this.setState({
        hours: this.hours,
        minutes: this.minutes,
        seconds: this.seconds,
      });
    }
  }

  zeroHandler(num) {
    return String(num).length === 1 ? "0" + num : num;
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="grid grid-cols-3 gap-16 text-8xl text-purple-800 shadow-xl">
            <div className="bg-white flex justify-center items-center py-16 ">
              <span className="">
                {this.hours !== undefined ? this.zeroHandler(this.hours) : "00"}
              </span>
            </div>
            <div className="bg-white flex justify-center items-center py-16 ">
              <span className="">
                {this.minutes !== undefined
                  ? this.zeroHandler(this.minutes)
                  : "00"}
              </span>
            </div>
            <div className="bg-white flex justify-center items-center py-16 ">
              <span className="">
                {this.seconds !== undefined
                  ? this.zeroHandler(this.seconds)
                  : "00"}
              </span>
            </div>
          </div>
          <button
            className="bg-blue-950 text-white rounded-lg py-4 px-10 text-lg mt-8"
            onClick={(event) => this.timerHandler(event)}
          >
            start
          </button>
        </div>
      </>
    );
  }
}
