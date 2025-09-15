import { configureStore } from "@reduxjs/toolkit";
import auth from "../states/auth-slice.js";
export const store = configureStore({
  reducer: { auth },
});
