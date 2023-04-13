import { configureStore } from "@reduxjs/toolkit";
import snackbarSlice from '../app/reducer/Snackbar'
import progressSlice from "../app/reducer/progressBar";
import userProfileSlice from "./reducer/getUserProfile";
import studentDetailsSlice from "./reducer/getStudentData";
import commentsSlice from "./reducer/getComments";
export const store = configureStore({
  reducer: {
    snackbar: snackbarSlice,
    progressBar: progressSlice,
    getUserProfile: userProfileSlice,
    getStudentDetails: studentDetailsSlice,
    getStudentComment: commentsSlice,
  },
});
