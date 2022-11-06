import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "../redux";

export const RequiredRoute = ({children}) => {
  const { isAuthenticated } = useSelector((state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    };
  });
  const nav = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      nav("/");
    }
  }, [nav, isAuthenticated]);

  return children;
};
