import React from "react";
import { isLogin } from "../utils";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="component__container bg-blue_radial">
      <h2 className="text-white text-5xl font-bold drop-shadow-md">
        welcome to dashboard
      </h2>
    </div>
  );
}
// export default function Dashboard() {
//   return isLogin("mohammad") ? (
//     <div className="component__container bg-blue_radial">
//       <h2 className="text-white text-5xl font-bold drop-shadow-md">
//         welcome to dashboard
//       </h2>
//     </div>
//   ) : (
//     <Navigate to={"/"} />
//   );
// }
