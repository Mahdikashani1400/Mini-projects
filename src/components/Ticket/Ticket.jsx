import React, { Component } from "react";

export default class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainCountry: "",
      contriesInfo: {
        USA: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
        Canada: ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton"],
        Mexico: [
          "Mexico City",
          "Guadalajara",
          "Puebla",
          "Tijuana",
          "Ciudad Juárez",
        ],
        Germany: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"],
        France: ["Paris", "Marseille", "Lyon", "Toulouse", "Bordeaux"],
        UK: ["London", "Birmingham", "Manchester", "Liverpool", "Edinburgh"],
        Spain: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza"],
        Italy: ["Rome", "Milan", "Naples", "Turin", "Palermo"],
        Japan: ["Tokyo", "Osaka", "Kyoto", "Sendai", "Fukuoka"],
        Korea: ["Seoul", "Busan", "Daegu", "Incheon", "Gwangju"],
      },
    };
  }
  changeCountryHandler(e) {
    this.setState({
      mainCountry: e.nativeEvent.target.value,
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="lg:w-[800px] w-full mx-auto rounded-xl relative h-80 bg-white/20 shadow-xl grid lg:grid-cols-3 grid-cols-1 font-mono">
            <div className=" bg-flight w-full h-full bg-no-repeat bg-contain rounded-l-xl hidden md:block"></div>
            <div className="mt-10 col-span-2 md:mx-20 mx-10 flex flex-col gap-10">
              <div className="flex flex-col  ">
                <label
                  className=" text-white mb-2 text-lg font-semibold tracking-wider"
                  htmlFor=""
                >
                  countries
                </label>
                <select
                  name=""
                  className="p-2 rounded-lg bg-white/90 text-zinc-700"
                  id=""
                  onChange={(e) => {
                    this.changeCountryHandler(e);
                  }}
                >
                  <option value="">Please Select ...</option>
                  {Object.keys(this.state.contriesInfo).map(
                    (country) =>
                      (country === this.state.mainCountry && (
                        <option selected value={country}>
                          {country}
                        </option>
                      )) || <option value={country}>{country}</option>
                  )}
                </select>
              </div>
              <div className="flex flex-col  ">
                <label
                  className=" text-white mb-2 text-lg font-semibold tracking-wider"
                  htmlFor=""
                >
                  cities
                </label>
                <select
                  name=""
                  className="p-2 rounded-lg bg-white/90 text-zinc-700"
                  id=""
                >
                  {(this.state.mainCountry &&
                    this.state.contriesInfo[this.state.mainCountry].map(
                      (city) => <option>{city}</option>
                    )) || <option>no city</option>}
                </select>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
