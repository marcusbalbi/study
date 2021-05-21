import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/actions";

const UserHeader = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.users.find((u) => u.id === userId);
  });
  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  if (!user) {
    return null;
  }
  return <div>{user.name}</div>;
};

export default UserHeader;
