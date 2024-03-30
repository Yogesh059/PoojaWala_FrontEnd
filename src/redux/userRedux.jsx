import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false; // Reset error state when login process starts
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false; // Reset error state on successful login
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true; // Set error state on login failure
    }
  }
});

export const { loginStart, loginFailure, loginSuccess } = userSlice.actions;
export default userSlice.reducer;
