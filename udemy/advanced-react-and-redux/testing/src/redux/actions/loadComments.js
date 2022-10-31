import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const loadComments = createAsyncThunk('comments/loadComments', async () => {
  const data = await axios.get("http://jsonplaceholder.typicode.com/comments");
  return data.data.map((comment) =>  {
    return {
      ...comment,
      comment: [...comment.body, ],
    };
  })
})