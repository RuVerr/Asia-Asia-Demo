import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: window.innerWidth <= 600
};

export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setMobile: (state, action) => {
      state.isMobile = action.payload;
    }
  }
});

export const { setMobile } = screenSlice.actions;

export default screenSlice.reducer;
