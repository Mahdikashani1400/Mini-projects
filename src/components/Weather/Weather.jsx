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
  setCity() {}
  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=14cb5b00d527cf8f7bcb66f6516bca11`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          mainInfo: data,
        });
      });
  }
  render() {
    console.log();
    return (
      <div className="weather component__container bg-[#E2C112] overflow-y-hidden relative ">
        <div className=" shape right-6 -bottom-[322px]"></div>
        <div className=" shape left-6 -top-[322px] rotate-90"></div>
        <div className="container ">
          {this.state.mainInfo ? (
            <div className="weather__content relative  mx-10 rounded-[20px] px-25 py-20">
              <div className="bg rounded-[20px]"></div>

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
                    className="w-[500px] text-white"
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

              <div className="border border-[#7D7878] rounded-xl bg-black/40 shadow-md shadow-[#7D7878] flex justify-between items-center py-8 px-10 relative z-20">
                <div className="text-left">
                  <h4 className="text-pink-600 mb-5 text-3xl font-semibold">
                    {this.state.mainInfo.name}
                  </h4>
                  <p className="">
                    {" "}
                    <span className="text-yellow-400 font-bold text-5xl ">
                      {Number(this.state.mainInfo.main?.temp - 272).toFixed()}{" "}
                      °c
                    </span>
                    <span className="text-white text-xl pl-3">
                      {this.state.mainInfo.weather[0].main}
                    </span>
                  </p>
                </div>
                <div className="text-white text-xl ">
                  <p>Air quality : 20 - Good</p>
                </div>
              </div>
              <div className="relative z-20 mt-10">
                <h5 className="font-semibold text-lg text-white mb-7">
                  Weather details
                </h5>
                <div className="grid grid-cols-3 gap-5">
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
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
