import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    signin(state, action) {
      state.isAuthenticated = true;
    },
    signout(state, action) {
      state.isAuthenticated = false;
    },
  }
});

export const { signin, signout } = authSlice.actions;
export default authSlice.reducer;
