// progressSlice.js
import { createSlice } from "@reduxjs/toolkit";

const progressSlice = createSlice({
  name: "progress",
  initialState: false,
  reducers: {
    setProgress(state) {
      return !state;
    },
  },
});

export const { setProgress } = progressSlice.actions;
export default progressSlice.reducer;
