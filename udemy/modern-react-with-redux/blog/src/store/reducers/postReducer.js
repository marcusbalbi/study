const postReducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return posts;
  }
};


export default postReducer