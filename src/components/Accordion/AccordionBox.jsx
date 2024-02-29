import React, { useState } from "react";
import WithAccordion from "../../HOCs/WithAccordion/WithAccordion";

function AccordionBox({ data, showInfo, toggleShowInfoHandler }) {
  console.log(data, showInfo, toggleShowInfoHandler);
  return (
    <>
      <div
        className="py-3 text-white border-gray-300 border-b cursor-pointer"
        onClick={toggleShowInfoHandler}
      >
        <div className="flex gap-3 items-center px-5 ">
          <span>{showInfo ? "-" : "+"}</span>
          <h3>{data.title}</h3>
        </div>
        <div
          className={`py-3 px-5 mt-3 border-t text-left transition-all ${
            !showInfo ? "hidden" : ""
          }`}
        >
          <p>{data.info}</p>
        </div>
      </div>
    </>
  );
}

export default WithAccordion(AccordionBox);

// WithAccordion(AccordionBox) {props} === NewComponent {props}

// در واقع با فراخوانی اکاردیون باکس ، وید اکاردیون فراخوانی میشود.
