import { openSnackbar } from "../app/reducer/Snackbar";

export const errorHandler = (code, message, dispatch) => {
  if(code === 400){
      dispatch(
        openSnackbar({
          message: message,
          severity: "error",
        })
      );
  }
  else if (code === 401) {
    dispatch(
      openSnackbar({
        message: message,
        severity: "error",
      })
    );
  } else if (code === 404) {
    dispatch(
      openSnackbar({
        message: message,
        severity: "error",
      })
    );
  } else if (code === 500) {
    dispatch(
      openSnackbar({
        message: message,
        severity: "error",
      })
    );
  } else {
    dispatch(
      openSnackbar({
        message: message,
        severity: "error",
      })
    );
  }
};
