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
          return (
            <li>
              <b>{post.title}</b><br />{post.body.substr(0, 150).concat("...")}.
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;
