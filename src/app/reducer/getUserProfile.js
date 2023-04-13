// userProfileSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
  name: "getUserProfile",
  initialState: {
    userData: {},
  },
  reducers: {
    fetchData(state, action) {
      state.userData = action.payload.userData;
    },
  },
});

export const { fetchData } = userProfileSlice.actions;
export default userProfileSlice.reducer;
