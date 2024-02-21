import React from "react";
import { isLogin } from "../utils";
import { Navigate } from "react-router-dom";

export default function Panel() {
  return (
    <div className="component__container bg-blue_radial">
      <h2 className="text-white text-5xl font-bold drop-shadow-md">
        welcome to Panel
      </h2>
    </div>
  );
}
