// userProfileSlice.js
import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "getStudentComment",
  initialState: {
    data: [],
  },
  reducers: {
    fetchComments(state, action) {
      state.data = action.payload.data;
    },
  },
});

export const { fetchComments } = commentsSlice.actions;
export default commentsSlice.reducer;
