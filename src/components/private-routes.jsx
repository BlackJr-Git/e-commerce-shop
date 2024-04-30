import { Navigate, Outlet, useLocation } from "react-router-dom";

const isAuthenticated = () => {
    return sessionStorage.getItem("token") ? true : false;
};

const PrivateRoute = () => {
  const location = useLocation();
  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
