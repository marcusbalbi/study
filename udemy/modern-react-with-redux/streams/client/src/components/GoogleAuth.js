import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signIn, signOut } from "../store/actions";

const GoogleAuth = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const dispatch = useDispatch();
  let auth = useRef();
  useEffect(() => {
    function onAuthChanged(isSignedIn) {
      if (isSignedIn) {
        dispatch(signIn(auth.current.currentUser.get().getId()));
      } else {
        dispatch(signOut());
      }
    }
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          onAuthChanged(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChanged);
        });
    });
  }, [dispatch]);

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
