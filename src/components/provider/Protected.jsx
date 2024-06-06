import React from "react";
import { Redirect } from "react-router-dom";

const Protected = async ({ children }) => {
  const token = (await localStorage.getItem("token")) || "";

  if (!token) {
    return <Redirect to="/sign-in" />;
  }

  return children;
};

export default Protected;
