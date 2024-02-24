import React, { useRef, useState } from "react";
// import React, { Component } from "react";

// functional component
export default function TimerRef(props) {
  let hoursVar = null;
  let minutesVar = null;
  let secondsVar = null;
  const timeControler = useRef(null);
  const [count, setCount] = useState(0);

  const [hours, setHours] = useState(hoursVar);
  const [minutes, setMinutes] = useState(minutesVar);
  const [seconds, setSeconds] = useState(secondsVar);

  function updateValues(statement) {
    let currentTime = new Date();
    hoursVar = statement === "start" ? currentTime.getHours() : 0;
    minutesVar = statement === "start" ? currentTime.getMinutes() : 0;
    secondsVar = statement === "start" ? currentTime.getSeconds() : 0;
    setHours(hoursVar);
    setMinutes(minutesVar);
    setSeconds(secondsVar);
  }
  function timerHandler(event) {
    if (!count) {
      event.target.innerHTML = "stop";
      setCount(1);

      timeControler.current = setInterval(() => {
        updateValues("start");
        if (event.target.innerHTML === "start") {
          clearInterval(timeControler.current);
          updateValues("finish");
        }
      }, 1000);
    } else {
      setCount(0);
      event.target.innerHTML = "start";
    }
  }

  function zeroHandler(num) {
    return String(num).length === 1 ? "0" + num : num;
  }
  {
    console.log("x");
  }

  return (
    <div className="component__container bg-blue_radial">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-16 text-8xl text-purple-800 shadow-xl">
          <div className="bg-white flex justify-center items-center py-16 ">
            <span className="">
              {hours !== null ? zeroHandler(hours) : "00"}
            </span>
          </div>
          <div className="bg-white flex justify-center items-center py-16 ">
            <span className="">
              {minutes !== null ? zeroHandler(minutes) : "00"}
            </span>
          </div>
          <div className="bg-white flex justify-center items-center py-16 ">
            <span className="">
              {seconds !== null ? zeroHandler(seconds) : "00"}
            </span>
          </div>
        </div>
        <button
          className="bg-blue-950 text-white rounded-lg py-4 px-10 text-lg mt-8"
          onClick={(event) => timerHandler(event)}
        >
          start
        </button>
      </div>
    </div>
  );
}
