import React from "react";

export default function Message({ statement, children }) {
  console.log(statement);
  return (
    <div>
      {" "}
      <p
        className={`text-${
          (statement && "green") || "red"
        }-300 font-bold text-sm mt-1`}
      >
        {children}
      </p>
    </div>
  );
}
