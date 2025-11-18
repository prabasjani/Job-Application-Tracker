import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Protected = () => {
  const { isAuth, loading } = useContext(AppContext);
  // Loading state is used to stays the user logged in after refresh the page
  if (loading) return null;
  if (!isAuth) return <Navigate to="/auth" />;
  return <Outlet />;
};

export default Protected;
