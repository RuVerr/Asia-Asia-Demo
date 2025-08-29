import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./screenSlice/screenSlice";
import authReducer from "./authSlice/authSlice";

export const store = configureStore({
  reducer: {
    screen: screenReducer,
    auth: authReducer,
  }
});
