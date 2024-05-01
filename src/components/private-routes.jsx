import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Loading } from ".";

const isAuthenticated = async () => {
  const token = Cookies.get("token");

  if (!token) return false;

  try {
    const isAdmin = await axios.post("http://localhost:3000/api/auth/verify", {
      token: token,
    });
    return isAdmin.data === true ? true : false;
  } catch (error) {
    return false;
  }
};

const PrivateRoute = () => {
  const location = useLocation();
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await isAuthenticated();
      setAuth(isAuth);
    };
    checkAuth();
  }, []);


  if (auth === null) {
    return <Loading /> 
  }
  
  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
