import jsonPlaceholder from "../../apis/jsonPlaceholder";
// import { memoize } from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const { posts } = getState();

  const users = new Set(posts.map((post) => post.userId));
  for (let id of users) {
    dispatch(fetchUser(id));
  }
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const { data } = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: data,
    });
  };
};

// const _fectchUser = memoize(async (userId, dispatch) => {
//   const { data } = await jsonPlaceholder.get("/users/" + userId);
//   dispatch({
//     type: "FETCH_USER",
//     payload: data,
//   });
// });

// export const fetchUser = (userId) => (dispatch) => {
//   return _fectchUser(userId, dispatch);
// };

export const fetchUser = (userId) => async (dispatch) => {
  const { data } = await jsonPlaceholder.get("/users/" + userId);
  dispatch({
    type: "FETCH_USER",
    payload: data,
  });
};
