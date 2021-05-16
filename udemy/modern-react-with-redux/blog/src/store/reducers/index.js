import { combineReducers } from "redux";

const posts = (posts = [], action) => {
  if (action.type === "FETCH_POSTS") {
    console.log("cheguei")
    return action.payload
  }
  return posts;
};

const reducers = combineReducers({
  posts,
});

export default reducers;
