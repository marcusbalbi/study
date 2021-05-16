import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/actions";
const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {posts.map((post) => {
          return <li>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default PostList;
