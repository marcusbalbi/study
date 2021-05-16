import jsonPlaceholder from "../../apis/jsonPlaceholder";

export const fetchPosts = () => {
  return async (dispatch) => {
    const {data} = await jsonPlaceholder.get("/posts");
    return dispatch({
      type: "FETCH_POSTS",
      payload: data,
    });
  };
};
