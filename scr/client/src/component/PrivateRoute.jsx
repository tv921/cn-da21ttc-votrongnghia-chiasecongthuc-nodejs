import React from "react";
import { Navigate } from "react-router-dom";
import { getRoleFromToken, isAuthenticated } from "../auth";

const PrivateRoute = ({ children, roles }) => {
  console.log("Token:", localStorage.getItem("token")); 
  console.log("User Role:", getRoleFromToken());       

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  const userRole = getRoleFromToken();
  if (!roles.includes(userRole)) {
    return <Navigate to="/warning" replace />;
  }

  return children;
};

export default PrivateRoute;
