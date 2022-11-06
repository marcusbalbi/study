import React from 'react'
import { useSelector, useDispatch } from '../redux';
import { Link } from "react-router-dom";
import { signin, signout } from 'redux/reducers/auth';

export const Header = () => {

  const { isAuthenticated } = useSelector((state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    }
  });

  const dispatch = useDispatch();

  const renderAuthButtons = () => {
    if (isAuthenticated) {
      return <button onClick={() => {
        dispatch(signout())
      }} >SignOut</button>;
    }
    return <button onClick={() => {
      dispatch(signin())
    }} >SignIn</button>;
  }

  return (
    <ul style={{ display: "flex", listStyle: "none" }}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post</Link>
      </li>
      <li>
        {renderAuthButtons()}
      </li>
    </ul>
  );
}