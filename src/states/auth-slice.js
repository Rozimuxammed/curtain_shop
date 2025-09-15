import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state) => {
      state.user = localStorage.clear();
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
