const postReducer = (users = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...users, action.payload];
    default:
      return users;
  }
};

export default postReducer;
