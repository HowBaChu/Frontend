import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("Access-Token");
    setIsLoggedIn(!!token);
  }, []);

  const login = () => {
    setIsLoggedIn(true);
  };

  return { isLoggedIn, login };
};

export default useAuth;
