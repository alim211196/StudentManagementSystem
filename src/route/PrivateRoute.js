import { useCookies } from "react-cookie";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [cookies] = useCookies(["loggedIn"]);
  return cookies.loggedIn === "true" ? <Outlet /> : <Navigate to="/sign_in" />;
};

export default PrivateRoute;
