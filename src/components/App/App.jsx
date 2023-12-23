// import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Icons from "../Icons/Icons";
import LoginForm from "../LoginForm/LoginForm";
import Products from "../Products/Products";
import Timer from "../Timer/Timer";
import QuizApp from "../QuizApp/QuizApp";
function App() {
  const formInfo = { title: "Sign in" };
  // const formInfo = {};

  // const formControler = formInfo.title==="Sign in"?():""

  return (
    <>
      <Icons></Icons>

      <QuizApp></QuizApp>
    </>
  );
}

export default App;
