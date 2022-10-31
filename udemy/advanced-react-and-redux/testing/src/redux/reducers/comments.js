import { createSlice } from "@reduxjs/toolkit";
import { loadComments } from "redux/actions/loadComments";

const commentsSlice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {
    addComment(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loadComments.fulfilled, (state, action) => {
      // Add user to the state array
      state.push(...action.payload);
    })
  }
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
