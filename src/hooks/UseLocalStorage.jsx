import React, { useEffect, useState } from "react";

function setLocalStorage(keyName, data) {
  localStorage.setItem(keyName, JSON.stringify(data));
}
function getLocalStorage(keyName) {
  return JSON.parse(localStorage.getItem(keyName));
}
export default function UseLocalStorage(keyName) {
  const [data, setData] = useState(() => {
    return getLocalStorage(keyName)
      ? getLocalStorage(keyName)
      : [
          {
            keyName,
          },
        ];
  });
  useEffect(() => {
    setLocalStorage(data[0].keyName, data);
  }, [data]);
  return [data, setData];
}
