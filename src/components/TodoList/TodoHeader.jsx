import React, { Component, PureComponent } from "react";

export default function TodoHeader(props) {
    return (
      <>
        <div className="bg-black h-50 flex justify-center items-center gap-x-4">
          <svg className="w-[22px] h-9">
            <use href="#todoIcon"></use>
          </svg>
          <h5 className="text-4xl  font-black text-sky-400">
            to<span className="text-purple-500">do</span>
          </h5>
        </div>
      </>
    );
}
