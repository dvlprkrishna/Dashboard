import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ isAuthenticated, userRole }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
