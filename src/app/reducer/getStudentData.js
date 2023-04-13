// userProfileSlice.js
import { createSlice } from "@reduxjs/toolkit";

const studentDetailsSlice = createSlice({
  name: "getStudentDetails",
  initialState: {
    data: {},
  },
  reducers: {
    fetchStudentData(state, action) {
      state.data = action.payload.data;
    },
  },
});

export const { fetchStudentData } = studentDetailsSlice.actions;
export default studentDetailsSlice.reducer;
