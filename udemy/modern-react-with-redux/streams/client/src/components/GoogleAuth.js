import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { signIn, signOut } from "../store/actions";

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const dispatch = useDispatch();
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

  function onAuthChanged(isSignedIn) {
    if (isSignedIn) {
      dispatch(signIn())
    } else {
      dispatch(signOut());
    }
  }

  function onSignin() {
    auth.current.signIn();
  }

  function onSignout() {
    auth.current.signOut();
  }

  function renderAuthButton() {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn === true) {
      return (
        <button className="ui red google button" onClick={onSignout}>
          <i className="google icon"></i>
          Sign out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={onSignin}>
          <i className="google icon"></i>
          Sign in with Google
        </button>
      );
    }
  }

  return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
