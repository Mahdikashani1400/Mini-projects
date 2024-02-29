import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="component__container bg-blue_radial justify-start">
        <div className="mb-16">
          <h1 className="text-4xl text-white font-bold ">My Projects</h1>
        </div>
        <ul className="flex flex-col gap-3 items-center">
          <li className="text-lg text-white border border-lime-600 bg-lime-500/30 w-1/6 rounded-lg transition-all cursor-pointer hover:bg-lime-500/50">
            <Link className="block p-4 rounded-lg w-full" to="/TodoList">
              TodoList
            </Link>
          </li>
          <li className="text-lg text-white border border-lime-600 bg-lime-500/30 w-1/6 rounded-lg transition-all cursor-pointer hover:bg-lime-500/50">
            <Link className="block p-4 rounded-lg w-full" to="/LoginForm">
              LoginForm
            </Link>
          </li>
          <li className="text-lg text-white border border-lime-600 bg-lime-500/30 w-1/6 rounded-lg transition-all cursor-pointer hover:bg-lime-500/50">
            <Link className="block p-4 rounded-lg w-full" to="/Products">
              Products
            </Link>
          </li>
          <li className="text-lg text-white border border-lime-600 bg-lime-500/30 w-1/6 rounded-lg transition-all cursor-pointer hover:bg-lime-500/50">
            <Link className="block p-4 rounded-lg w-full" to="/Timer">
              Timer
            </Link>
          </li>
          <li className="text-lg text-white border border-lime-600 bg-lime-500/30 w-1/6 rounded-lg transition-all cursor-pointer hover:bg-lime-500/50">
            <Link className="block p-4 rounded-lg w-full" to="/QuizApp">
              QuizApp
            </Link>
          </li>
          <li className="text-lg text-white border border-lime-600 bg-lime-500/30 w-1/6 rounded-lg transition-all cursor-pointer hover:bg-lime-500/50">
            <Link className="block p-4 rounded-lg w-full" to="/Ticket">
              Ticket
            </Link>
          </li>
          <li className="text-lg text-white border border-lime-600 bg-lime-500/30 w-1/6 rounded-lg transition-all cursor-pointer hover:bg-lime-500/50">
            <Link className="block p-4 rounded-lg w-full" to="/Weather">
              Weather
            </Link>
          </li>
          <li className="text-lg text-white border border-lime-600 bg-lime-500/30 w-1/6 rounded-lg transition-all cursor-pointer hover:bg-lime-500/50">
            <Link className="block p-4 rounded-lg w-full" to="/Accordion">
              Accordion
            </Link>
          </li>
          <li className="text-lg text-white border border-lime-600 bg-lime-500/30 w-1/6 rounded-lg transition-all cursor-pointer hover:bg-lime-500/50">
            <Link className="block p-4 rounded-lg w-full" to="/TodoTable/1">
              TodoTable
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
