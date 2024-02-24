import React, { useState } from "react";
// import React, { Component } from "react";

// functional component
export default function Timer(props) {
  let hoursVar = null;
  let minutesVar = null;
  let secondsVar = null;
  let timeControler = null;
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
      event.target.innerHTML = "finish";
      setCount(1);

      timeControler = setInterval(() => {
        updateValues("start");
        if (event.target.innerHTML === "start") {
          clearInterval(timeControler);
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

// class component

// export default class Timer extends Component {
//   constructor(props) {
//     super(props);
//     this.count = 0;
//     this.state = {
//       hours: this.hours,
//       minutes: this.minutes,
//       seconds: this.seconds,
//     };
//   }
//   updateValues(statement) {
//     this.currentTime = new Date();
//     this.hours = statement === "start" ? this.currentTime.getHours() : 0;
//     this.minutes = statement === "start" ? this.currentTime.getMinutes() : 0;
//     this.seconds = statement === "start" ? this.currentTime.getSeconds() : 0;
//   }
//   timerHandler(event) {
//     if (!this.count) {
//       event.target.innerHTML = "finish";
//       this.count += 1;
//       this.timeControler = setInterval(() => {
//         this.updateValues("start");
//         this.setState({
//           hours: this.hours,
//           minutes: this.minutes,
//           seconds: this.seconds,
//         });
//       }, 1000);
//     } else {
//       this.count = 0;
//       event.target.innerHTML = "start";

//       clearInterval(this.timeControler);
//       this.updateValues("finish");
//       this.setState({
//         hours: this.hours,
//         minutes: this.minutes,
//         seconds: this.seconds,
//       });
//     }
//   }

//   zeroHandler(num) {
//     return String(num).length === 1 ? "0" + num : num;
//   }
//   render() {
//     return (
//       <div className="component__container bg-blue_radial">
//         <div className="container">
//           <div className="grid md:grid-cols-3 gap-16 text-8xl text-purple-800 shadow-xl">
//             <div className="bg-white flex justify-center items-center py-16 ">
//               <span className="">
//                 {this.hours !== undefined ? this.zeroHandler(this.hours) : "00"}
//               </span>
//             </div>
//             <div className="bg-white flex justify-center items-center py-16 ">
//               <span className="">
//                 {this.minutes !== undefined
//                   ? this.zeroHandler(this.minutes)
//                   : "00"}
//               </span>
//             </div>
//             <div className="bg-white flex justify-center items-center py-16 ">
//               <span className="">
//                 {this.seconds !== undefined
//                   ? this.zeroHandler(this.seconds)
//                   : "00"}
//               </span>
//             </div>
//           </div>
//           <button
//             className="bg-blue-950 text-white rounded-lg py-4 px-10 text-lg mt-8"
//             onClick={(event) => this.timerHandler(event)}
//           >
//             start
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
