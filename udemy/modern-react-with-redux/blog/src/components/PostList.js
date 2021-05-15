import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../store/actions";
const PostList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return <div>Post List</div>;
};

export default PostList;
