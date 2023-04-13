import { useCookies } from "react-cookie";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const [cookies] = useCookies(["loggedIn"]);
  return cookies.loggedIn === "true" ? (
    <Navigate to="/dashboard" />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
