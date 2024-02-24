import React, { useRef, useState } from "react";

export default function TitleUseRef() {
  const [value, setValue] = useState("");
  const titleRef = useRef("default");
  return (
    <div>
      <input
        className="border border-r-red-600 mt-5 px-2"
        type="text"
        value={value}
        onChange={(e) => {
          //   titleRef.current = "bye";
          setValue(e.target.value);
        }}
      />
      <p>You entered: {titleRef.current}</p>
      <button
        className="bg-gray-900 text-white p-2 rounded-lg mt-4 "
        onClick={() => {
          titleRef.current = "ey baba";
        }}
      >
        Submit
      </button>
    </div>
  );
}
