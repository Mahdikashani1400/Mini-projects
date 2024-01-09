import React, { Component } from "react";
import { Button, Label, TextInput } from "flowbite-react";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      inputValue: "",
      mainInfo: null,
    };
  }
  changeInput(e) {
    this.setState({
      inputValue: e.nativeEvent.target.value,
    });
  }
  setCity() {
    this.setState({
      city: this.state.inputValue,
      inputValue: "",
    });
  }

  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=14cb5b00d527cf8f7bcb66f6516bca11`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          mainInfo: data,
        });
      });
  }
  getSnapshotBeforeUpdate(props, state) {
    return state.city !== this.state.city;
  }
  componentDidUpdate(props, state, flag) {
    flag &&
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=14cb5b00d527cf8f7bcb66f6516bca11`
      )
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            mainInfo: data,
          });
        });
  }
  render() {
    return (
      <div className="weather component__container bg-[#E2C112] overflow-y-hidden relative ">
        <div className=" shape right-6 -bottom-[322px]"></div>
        <div className=" shape left-6 -top-[322px] rotate-90"></div>
        <div className="container ">
          <div className="weather__content relative  mx-10 rounded-[20px] lg:px-25 md:px-14 px-8 py-20">
            <div
              className="bg rounded-[20px]"
              style={{
                backgroundImage: `url("/public/weather/${
                  this.state.mainInfo?.weather
                    ? this.state.mainInfo?.weather[0].main === "rainy"
                      ? "rainy.jpeg"
                      : "sun.jpg"
                    : "sun.jpg"
                }")`,
              }}
            ></div>

            <div className="flex max-w-md flex-col gap-4 z-50 relative mx-auto mb-10 items-center">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="md"
                    value="Small input"
                    className="text-white"
                  />
                </div>
                <TextInput
                  id="input-failure"
                  type="text"
                  sizing="md"
                  className="md:w-[500px] sm:w-72 w-fit text-white"
                  style={{ backgroundColor: "#27272a", color: "white" }}
                  onInput={this.changeInput.bind(this)}
                  value={this.state.inputValue}
                />
                <Button
                  type="submit"
                  className="mx-auto px-6 mt-4"
                  onClick={this.setCity.bind(this)}
                >
                  Submit
                </Button>
              </div>
            </div>

            {this.state.mainInfo?.main ? (
              <>
                <div className="border border-[#7D7878] rounded-xl bg-black/40 shadow-md shadow-[#7D7878] flex justify-between items-center py-8 lg:px-10 px-5 relative z-20">
                  <div className="md:text-left text-center">
                    <h4 className="text-pink-600 mb-5 lg:text-3xl text-xl font-semibold">
                      {this.state.mainInfo.name}
                    </h4>
                    <p className="">
                      {" "}
                      <span className="text-yellow-400 font-bold lg:text-5xl text-3xl w-full inline-block m-3">
                        {Number(this.state.mainInfo.main.temp - 272).toFixed()}{" "}
                        °c
                      </span>
                      <span className="text-white text-xl pl-3">
                        {this.state.mainInfo.weather[0].main}
                      </span>
                    </p>
                  </div>
                  <div className="text-white text-xl hidden md:block">
                    <p>Air quality : 20 - Good</p>
                  </div>
                </div>
                <div className="relative z-20 mt-10">
                  <h5 className="font-semibold text-lg text-white mb-7">
                    Weather details
                  </h5>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    <div className="p-5 bg-black/60 rounded-lg">
                      <p className="text-zinc-400 pb-2 mb-3 shadow-[#7D7878] shadow-sm">
                        Humidity
                      </p>
                      <p className="text-white text-lg ">
                        {this.state.mainInfo.main.humidity}%
                      </p>
                    </div>
                    <div className="p-5 bg-black/60 rounded-lg">
                      <p className="text-zinc-400 pb-2 mb-3 shadow-[#7D7878] shadow-sm">
                        pressure
                      </p>
                      <p className="text-white text-lg ">
                        {this.state.mainInfo.main.pressure}
                      </p>
                    </div>
                    <div className="p-5 bg-black/60 rounded-lg">
                      <p className="text-zinc-400 pb-2 mb-3 shadow-[#7D7878] shadow-sm">
                        Humidity
                      </p>
                      <p className="text-white text-lg ">82%</p>
                    </div>
                    <div className="p-5 bg-black/60 rounded-lg">
                      <p className="text-zinc-400 pb-2 mb-3 shadow-[#7D7878] shadow-sm">
                        Humidity
                      </p>
                      <p className="text-white text-lg ">82%</p>
                    </div>
                    <div className="p-5 bg-black/60 rounded-lg">
                      <p className="text-zinc-400 pb-2 mb-3 shadow-[#7D7878] shadow-sm">
                        Humidity
                      </p>
                      <p className="text-white text-lg ">82%</p>
                    </div>
                    <div className="p-5 bg-black/60 rounded-lg">
                      <p className="text-zinc-400 pb-2 mb-3 shadow-[#7D7878] shadow-sm">
                        Humidity
                      </p>
                      <p className="text-white text-lg ">82%</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="w-full bg-red-500/85 text-white rounded-lg lg:py-16 md:py-8 py-6 z-20 lg:text-3xl md:text-2xl text-base font-semibold relative">
                this city is not available !
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
