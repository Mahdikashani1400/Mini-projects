// import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Icons from "../Icons/Icons";
import LoginForm from "../LoginForm/LoginForm";
import Products from "../Products/Products";
import Timer from "../Timer/Timer";
import QuizApp from "../QuizApp/QuizApp";
import Ticket from "../Ticket/Ticket";
function App() {
  const formInfo = { title: "Login" };
  // const formInfo = {};

  // const formControler = formInfo.title==="Sign in"?():""

  return (
    <>
      <Icons></Icons>
      <LoginForm {...formInfo}>
        <div className="input__container">
          <label htmlFor="email" className="">
            Email
          </label>
          <input type="text" id="email" className="" placeholder="Email" />
        </div>
        <div className="input__container">
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            type="text"
            id="password"
            className=""
            placeholder="Password"
          />
        </div>
      </LoginForm>

      {/* <Products></Products> */}
      {/* <Timer></Timer> */}
      {/* <QuizApp></QuizApp> */}
      {/* <Ticket></Ticket> */}
    </>
  );
}

export default App;
