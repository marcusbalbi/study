import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  useEffect(() => {
    const onLocationChange = (a) => { console.log(a) };
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return window.location.pathname === path ? children : null;
};

export default Route;
