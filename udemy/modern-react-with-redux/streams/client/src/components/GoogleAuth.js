import React, { useEffect, useRef, useState } from "react";

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  let auth = useRef();
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChanged);
        });
    });
  }, []);

  function onAuthChanged() {
    setIsSignedIn(auth.current.isSignedIn.get());
  }

  function renderAuthButton() {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn === true) {
      return (
        <button className="ui red google button">
          <i className="google icon" ></i>
          Sign out
        </button>
      );
    } else {
      return (
        <button className="ui red google button">
          <i className="google icon"></i>
          Sign in with Google
        </button>
      );
    }
  }

  return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
