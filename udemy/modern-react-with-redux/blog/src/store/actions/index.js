import jsonPlaceholder from "../../apis/jsonPlaceholder";
import { memoize } from "lodash";
export const fetchPosts = () => {
  return async (dispatch) => {
    const { data } = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: data,
    });
  };
};

const _fectchUser = memoize(async (userId, dispatch) => {
  const { data } = await jsonPlaceholder.get("/users/" + userId);
  dispatch({
    type: "FETCH_USER",
    payload: data,
  });
});

export const fetchUser = (userId) => (dispatch) => {
  return _fectchUser(userId, dispatch);
};
