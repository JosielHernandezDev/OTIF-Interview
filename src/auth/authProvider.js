import { createContext, useState, useEffect } from "react";
import { loginService } from "../core/service/authServices";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    JSON.parse(localStorage.getItem("access_token")) || null
  );

  useEffect(() => {
    try {
      localStorage.clear();
      if (accessToken !== null) {
        localStorage.setItem("access_token", JSON.stringify(accessToken));
      }
    } catch (error) {
      localStorage.removeItem("access_token");
      console.log(error);
    }
  }, [accessToken]);

  const contextValue = {
    async login(credentials) {
      try {
        const { status, data } = await loginService(credentials);
        if (data?.status) {
          setAccessToken(data);
          return {
            data,
            success: data.status === 1,
          };
        }else{
          return {success:false,results:data.results}
        }
      } catch (error) {
        console.log("error",error);
        if (error.response) {
          const { response } = error;
          return {
            ...response,
          };
        } else if (error.request) {
          return error.request;
        } else {
          return error;
        }
      }
    },
    async logout() {
      localStorage.removeItem("access_token");
      setAccessToken(null);
    },
    isLogged() {
      return !!accessToken;
    },
    getAccessToken() {
      return JSON.parse(localStorage.getItem("access_token")) || null;
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
