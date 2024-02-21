import React from "react";
import { isLogin } from "./utils";

import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ children }) {
  return (
    <>
      {isLogin("mohammad") ? (
        <>
          {/* {children} */}
          <Outlet />
        </>
      ) : (
        <Navigate to={"/LoginForm"} />
      )}
    </>
  );
}
