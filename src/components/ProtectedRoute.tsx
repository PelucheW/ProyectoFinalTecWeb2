import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function ProtectedRoute() {
  const { user } = useContext(UserContext);

  if (!user.logged) {
    return <Navigate to="/landing" replace />;
  }

  return <Outlet />;
}