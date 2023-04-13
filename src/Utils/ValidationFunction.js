import { openSnackbar } from "../app/reducer/Snackbar";

export const ValidationFunction = (event, dispatch) => {
  event.preventDefault();
  const formDataValues = new FormData(event.target);
  const data = {};
  for (let [key, value] of formDataValues.entries()) {
    data[key] = value;
  }
  const hasEmptyFields = Object.values(data).some((value) => !value);
  if (hasEmptyFields) {
    dispatch(
      openSnackbar({
        message: "Please fill out all fields.",
        severity: "error",
      })
    );
    return false;
  }
  const { password, confirm_password } = data;
  if (password !== confirm_password) {
    dispatch(
      openSnackbar({
        message: "Passwords do not match.",
        severity: "error",
      })
    );
    return false;
  }
};
